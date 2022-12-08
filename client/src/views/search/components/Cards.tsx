import { Box, Card, CardContent, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// type CardFilter = {
//   variation?: 'university' | 'athlete';
// };

export const CardFilter = ({ variation = '', id, fullName }: any) => {
  const width = 312;
  const isVariationAthlete = variation === 'athlete';
  const navigate = useNavigate();

  if (variation === '') return <></>;
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: '',
        Width: width,
        height: 'fit-content',
        margin: '16px',
        cursor: 'pointer',
      }}
      onClick={() => {
        navigate('/athlete-profile/' + id);
      }}
    >
      <CardContent
        sx={{
          width: '100%',
          padding: 0,
          '&:last-child': {
            paddingBottom: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 'auto',
          }}
        >
          <Box p={1} width="100%" sx={{ backgroundColor: '#261331' }}>
            <Typography color="#D3D3D3">ARG</Typography>
          </Box>
          {isVariationAthlete && (
            <Box
              width="auto"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              p={0}
            >
              <Typography
                sx={{ backgroundColor: '#2F0343', color: '#FFFFFF' }}
                p={1}
              >
                71
              </Typography>
              <Typography
                sx={{ backgroundColor: '#2D064C', color: '#FFFFFF' }}
                p={1}
              >
                8.75
              </Typography>
            </Box>
          )}
        </Box>

        <Box>
          <img
            src="https://thispersondoesnotexist.com/image"
            height={width}
            width={width}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="end"
          width={width}
          padding="10px"
        >
          {!isVariationAthlete && (
            <Typography
              sx={{
                fontWeight: 'normal',
                font: 'Roboto',
                fontSize: '14px',
              }}
            >
              Universidad
            </Typography>
          )}
          <Typography
            sx={{
              fontWeight: 'normal',
              font: 'Roboto',
              fontSize: '20px',
            }}
          >
            {fullName}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          px="8px"
        >
          {isVariationAthlete && (
            <>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Description>EDAD</Description>
                <DescriptionValue>18</DescriptionValue>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Description>Posición</Description>
                <DescriptionValue>DD</DescriptionValue>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Description>Estudio</Description>
                <DescriptionValue>ING.</DescriptionValue>
              </Box>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

const Description = styled(Typography)(() => ({
  fontSize: '14px',
}));
const DescriptionValue = styled(Typography)(() => ({
  fontSize: '20px',
  fontWeight: 'bold',
}));
