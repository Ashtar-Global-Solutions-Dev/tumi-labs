import { Container, Text } from '@nextui-org/react';
import { Box } from '@ui/Box/Box';
import { Flex } from '@ui/Flex/flex';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <Box
      css={{
        background: `url('/images/gredient_1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: '100% 100%',

        minHeight: '100vh',
      }}
    >
      <Container xl>
        <Flex align='center' justify='center' css={{ py: '$20' }}>
          <Link to='/'>
            <Box as='img' src='/images/logo.svg' css={{}} />
          </Link>
        </Flex>

        <Flex css={{ height: '62vh' }} align='center' justify='center'>
          <Text
            css={{
              fontFamily: "'Poppins'",
              fontStyle: 'normal',
              fontWeight: 800,
              fontSize: '75px',
              lineHeight: '96%',
              textAlign: 'center',

              '@media only screen and (max-width: 600px)': {
                fontSize: '45px',
              },
            }}
          >
          A new kind of venture studio
          </Text>
        </Flex>
        <Flex align='center' justify='center' css={{ py: '50px' }}>
          <Box as='a' href='https://twitter.com/TumiLabs' target='_blank'>
            <Flex css={{ gap: '15px', cursor: 'pointer' }} align='center'>
              <Box as='img' src='images/twitter.svg' />
              <Text
                css={{
                  fontFamily: "'Poppins'",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '22px',
                  lineHeight: '96%',
                }}
              >
                @tumilabs
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
