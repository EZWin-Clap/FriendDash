import Header from '../components/Header/Header';
import {
  Box,
  Heading,
  Avatar,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Button,
  useToast,
  useClipboard,
  Text,
  VStack,
  HStack,
  AvatarBadge,
  AvatarGroup,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const faqArray = [
  {
    question: 'How do I create a new group?',
    answer:
      'First, you need to ensure that you are logged in! You can login by clicking on the login button on the top right corner or navigating to /login. On the /dashboard, you will be able to search for the order you wish to join and join it by clicking View Order then Join Order.',
  },
  {
    question: 'How do I join an order?',
    answer:
      'First, you need to ensure that you are logged in! You can login by clicking on the login button on the top right corner or navigating to /login. On the dashboard, click the + icon on a card called "Create Group Order". Fill in the order details and click "Create Group".',
  },
  {
    question: 'I wish to delete my account. How do I delete it?',
    answer:
      'Login and click the icon on the left of the ramen found in the top navigation bar. Click on Account. In your account, you can click on delete in order to delete your account and all information associated with your account.',
  },
  {
    question: 'How do I view my profile?',
    answer:
      'Login and click on the icon on the left of the ramen found in the top navigation bar. Click on "View Profile".',
  },
  {
    question: 'How do I manage my orders?',
    answer:
      'Login and click on the icon on the left of the ramen found in the top navigation bar. Click on "Orders".',
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <Box
        marginTop="3%"
        align="center"
        p="30px"
        bg="gray.300"
        // w={{ lg: '600px', md: '600px', base: '100%' }}
        w="100%"
        h="400px"
        borderRadius="10px"
      >
        <Heading size="2xl" mt="25px">
          Who we are
        </Heading>
        <Text fontSize="xl" mt="10px" p="50px">
          FriendDash is a technology company that enables users to save time,
          money, and get their food faster! We work to connect people with the
          best of their communities across Canada. We enables local community
          members in relatively denser populations to join in an order where one
          member of the group picks up the order. The application is targeted
          toward university students and local community members. We’re
          fulfilling our mission to grow and empower local economies to get
          orders more efficiently becoming more ecofriendly.
        </Text>
      </Box>

      <Flex
        align="center"
        flexDir="column"
        textAlign="center"
        p="30px"
        // w={{ lg: '600px', md: '600px', base: '100%' }}
        w="100%"
        h="400px"
        borderRadius="10px"
      >
        <Heading size="2xl" mt="25px" textAlign="center">
          Our Team
        </Heading>

        <Flex mt="25px">
          <a href="https://linkedin.com/in/mrbenc88" flexDir="column">
            <Avatar
              name="Ben Cheung"
              size="2xl"
              src="https://media-exp2.licdn.com/dms/image/C5603AQHb26Z1mr0lTA/profile-displayphoto-shrink_200_200/0/1622881961480?e=1663200000&v=beta&t=Ek_cOSFv3Gw6qaOZx4PnFtcVT3PFRgaGNtk1PdvWxqU"
              m="30px"
            />
            <Text>Ben Cheung</Text>
          </a>
          <a href="https://linkedin.com/in/mrbenc88" flexDir="column">
            <Avatar
              name="Steven Zhao"
              size="2xl"
              src="https://media-exp2.licdn.com/dms/image/C4E03AQGMhmmvFiCFkw/profile-displayphoto-shrink_200_200/0/1516829566598?e=1663200000&v=beta&t=QHntFHuahWyaKul3gVQEHOAy0sBYNKctrakfeJW4srI"
              m="30px"
            />
            <Text>Steven Zhao</Text>
          </a>
          <a href="https://www.linkedin.com/in/thestevenzhao/" flexDir="column">
            <Avatar
              name="Brenden Yee"
              size="2xl"
              src="https://media-exp2.licdn.com/dms/image/C5603AQGHWZddFut6wg/profile-displayphoto-shrink_200_200/0/1594700037705?e=1663200000&v=beta&t=lGfn6HiwFEBXojljeBzOpHLK_jd-duAG9Da6JYCFza8"
              m="30px"
            />
            <Text>Brenden Yee</Text>
          </a>
          <a
            href="https://www.linkedin.com/in/maggie-wang-5549711a5/"
            flexDir="column"
          >
            <Avatar
              name="Maggie Wang"
              size="2xl"
              src="https://media-exp2.licdn.com/dms/image/C4D03AQHMLNTLWth6NA/profile-displayphoto-shrink_200_200/0/1590999175590?e=1663200000&v=beta&t=-UujsbU1qrodNviYKSaebrAKjzSBd-RivyyZfNS0JR8"
              m="30px"
            />
            <Text>Maggie Wang</Text>
          </a>
        </Flex>
      </Flex>
      <Flex
        align="center"
        flexDir="column"
        textAlign="center"
        p="35px"
        // w={{ lg: '600px', md: '600px', base: '100%' }}
        w="100%"
        h="100%"
        borderRadius="10px"
        bg="gray.100"
      >
        <Heading size="2xl" mt="25px" textAlign="center">
          Frequently Asked Questions
        </Heading>
        <Accordion allowMultiple width="100%" mt="40px" mb="25px">
          {faqArray.map((entry, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {entry.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{entry.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </div>
  );
};

export default Home;
