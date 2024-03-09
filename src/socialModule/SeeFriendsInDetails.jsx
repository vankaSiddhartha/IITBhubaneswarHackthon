import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  Divider,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SocialProfileSimple() {
  // Dummy data for joined clubs and activity feed
  const joinedClubs = ["Art Club", "Photography Club"];
  const activityFeed = [
    { action: "Bid on Horse Toy", amount: "$3" },
    { action: "Joined Photography Club" },
    { action: "Bid on Artwork", amount: "$25" }
  ];

  return (
    <Center py={10}>
      <Box
        maxW={'xl'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'2xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'4xl'} fontFamily={'body'}>
          Lindsey James
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @lindsey_jam3s
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={6}>
          Actress, musician, songwriter and artist. PM for work inquires or{' '}
          <Text color={'blue.400'}>#tag</Text> me in your posts
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6} spacing={4}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            Followers: 1200
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            Following: 550
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            Posts: 300
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'lg'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
          </Button>
          <Button
            flex={1}
            fontSize={'lg'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
        </Stack>

        <Divider mt={8} mb={6} />

        <VStack align="start" spacing={4}>
          <Heading size="md">Joined Clubs</Heading>
          {joinedClubs.map((club, index) => (
            <Badge key={index} px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
              {club}
            </Badge>
          ))}
        </VStack>

        <Divider mt={8} mb={6} />

        <VStack align="start" spacing={4}>
          <Heading size="md">Activity Feed</Heading>
          {activityFeed.map((activity, index) => (
            <HStack key={index} spacing={4}>
              <Text>{activity.action}</Text>
              {activity.amount && <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
                {activity.amount}
              </Badge>}
            </HStack>
          ))}
        </VStack>
      </Box>
    </Center>
  )
}
