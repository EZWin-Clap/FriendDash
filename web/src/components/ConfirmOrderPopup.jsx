import { Button, Heading, IconButton, useDisclosure } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateOrderAsync } from '../redux/orders/thunk';
import { useNavigate } from "react-router-dom";

const mockUpdateOrder = {
  _id: '12313221313131',
  restaurant: 'Subway',
  creatorName: 'Johhny Hacks',
  pickupLocation: '5751 Student Union Blvd',
  pickupTime: '6:30pm',
  orderId: 1,
  creatorUserId: 1,
  orderStatus: 'open',
  orderDetails: [
    {
      orderUserId: 1,
      userName: 'hello',
      orderItems: [
        { menuItem: 'Classic Foot Long', price: 8, quantity: 2 },
        { menuItem: 'Doritos', price: 2, quantity: 1 },
        { menuItem: 'Sprite', price: 3, quantity: 1 },
      ],
    },
  ],
};

export default function ConfirmOrderPopup(props) {
  const dispatch = useDispatch();

  const { combineOrders, starters, mains, desserts } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const completeOrder = [...starters, ...mains, ...desserts];
  const navigate = useNavigate();

  const onConfirm = () => {
    onClose();
    // TODO: implement the proper navigation for closing group order
    navigate("/group/62b8b11e8d7b3c29a9b69a69");
  }

  const openPopUp = () => {
    combineOrders(starters, mains, desserts);
    onOpen();
  };

  const confirmOrderClick = () => {
    const newOrderItem = {
      orderUserId: 1234,
      userName: 'get username from localstorage',
      orderItems: completeOrder,
    };
    mockUpdateOrder.orderDetails.push(newOrderItem);
    dispatch(updateOrderAsync(mockUpdateOrder));
    onConfirm();
  };

  return (
    <>
      <Heading size="lg" ml="18px" pt="9px">
        Checkout
      </Heading>
      <IconButton
        aria-label="Customer checkout"
        icon={<AiOutlineShoppingCart />}
        onClick={openPopUp}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm Add to Group Order
            </AlertDialogHeader>

            <AlertDialogBody>
              <Heading size="sm">Order Summary</Heading>
              <TableContainer>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Item Name</Th>
                      <Th>Quantity</Th>
                      <Th isNumeric>Price</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {completeOrder.map((e, i) => {
                      return (
                        <Tr>
                          <Td>{e.menuItem}</Td>
                          <Td>{e.quantity}</Td>
                          <Td isNumeric>${e.price}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th> </Th>
                      <h3>
                        <b>TOTAL COST:</b>
                      </h3>
                      <h3 isNumeric>
                        <b>
                        $
                        {completeOrder.map((e) => e.price).reduce(
                          (previousValue, currentValue) =>
                            previousValue + currentValue,
                          0
                        )}
                        </b>
                      </h3>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
              <br />
              Are you sure you want to add to the group order? You can't make
              any changes afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="green" onClick={confirmOrderClick} ml={3}>
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
