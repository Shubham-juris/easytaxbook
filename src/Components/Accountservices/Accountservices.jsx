import * as React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

import TaxPlanningImage from '../../assets/Accountservices/image1.png';
import FinancialStatementsImage from '../../assets/Accountservices/image2.png';
import PayrollServicesImage from '../../assets/Accountservices/image3.png';
import BusinessFormationImage from '../../assets/Accountservices/image4.png';
import TaxPreparationImage from '../../assets/Accountservices/image5.png';
import AccountingSoftwareImage from '../../assets/Accountservices/image6.png';

function AccountingServices() {
  const services = [
    {
      image: TaxPlanningImage,
      title: 'Tax Planning',
      description:
        'Our tax planning services help you minimize your tax liability and take advantage of tax-saving opportunities. We stay up-to-date with all tax laws and regulations to ensure you receive the best possible tax advice.',
    },
    {
      image: FinancialStatementsImage,
      title: 'Financial Statements',
      description:
        'We provide accurate and timely financial statements to help you make informed business decisions. Our team of experts uses the latest software and technology to ensure your financial statements are up-to-date.',
    },
    {
      image: PayrollServicesImage,
      title: 'Payroll Services',
      description:
        'Our payroll services help you save time and money by handling all aspects of payroll management. From calculating employee wages to filing payroll taxes, we’ve got you covered.',
    },
    {
      image: BusinessFormationImage,
      title: 'Business Formation',
      description:
        'We assist with business formation to help you establish your company efficiently. Our experts guide you through legal requirements and ensure compliance for a smooth start.',
    },
    {
      image: TaxPreparationImage,
      title: 'Tax Preparation',
      description:
        'Our tax preparation services ensure your taxes are filed accurately and on time. We handle complex returns and maximize deductions to optimize your tax outcomes.',
    },
    {
      image: AccountingSoftwareImage,
      title: 'Accounting Software',
      description:
        'We provide expertise in accounting software to streamline your financial processes. Our team helps you implement and manage solutions for efficient bookkeeping and reporting.',
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            color: '#d32f2f',
            fontSize: { xs: '1.8rem', md: '2.8rem' },
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 6,
            textTransform: 'uppercase',
          }}
        >
          TAX AND ACCOUNTING SERVICES
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ p: 3, flexGrow: 1 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#4a4a4a',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#4a4a4a',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default AccountingServices;