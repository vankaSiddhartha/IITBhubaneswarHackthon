'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import NavBar from './components/NavBar'


export default function LandingPage() {
  return (
    <>
     <NavBar/>
    <Stack  minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}>
               Start binding, join our community!
              </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Bid in your way
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It&apos;s
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.300'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Add Product
            </Button>
            <Button rounded={'full'}>Bid Products</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://firebasestorage.googleapis.com/v0/b/mycrush-9ec67.appspot.com/o/Untitled%20design%20(8).png?alt=media&token=cffacbd1-a157-4e15-af65-8a088770811e'
          }
        />
      </Flex>
    </Stack>

   
    </>
  )
}