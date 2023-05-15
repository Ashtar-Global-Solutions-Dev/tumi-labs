import { Container, Text } from '@nextui-org/react';
import { Box } from '@ui/Box/Box';
import { Flex } from '@ui/Flex/flex';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <Box
      css={{
        background: `url('/images/gredient_1.png')`,
        backgroundSize: 'contain',
        height: '100vh',
      }}
    >
      <Container xl>
        <Flex align='center' justify='center' css={{ py: '$20' }}>
          <Link to='/'>
            <Box as='img' src='/images/logo.svg' css={{}} />
          </Link>
        </Flex>

        <Flex css={{ height: '60vh' }} align='center' justify='center'>
          <Text
            css={{
              fontFamily: "'Poppins'",
              fontStyle: 'normal',
              fontWeight: 800,
              fontSize: '75px',
              lineHeight: '96%',
              textAlign: 'center',
            }}
          >
            A new kind of venture studio
            <br />
            coming soon
          </Text>
        </Flex>
      </Container>
      <Flex></Flex>
    </Box>
  );
};
