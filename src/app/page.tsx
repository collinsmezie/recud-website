'use client';

import { useState } from 'react';
import { 
  ArrowForward, 
  People, 
  Settings, 
  BarChart, 
  FlashOn, 
  Security, 
  Language,
  Mail,
  Phone,
  LocationOn,
  Menu,
  Close
} from '@mui/icons-material';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  Paper
} from '@mui/material';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Settings sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: "Process Automation",
      description: "Streamline workflows and eliminate manual tasks with intelligent automation solutions."
    },
    {
      icon: <BarChart sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: "Analytics & Insights",
      description: "Gain deep visibility into your processes with real-time analytics and reporting."
    },
    {
      icon: <FlashOn sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: "Workflow Management",
      description: "Design, implement, and optimize complex business workflows with ease."
    },
    {
      icon: <Security sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: "Compliance & Security",
      description: "Ensure regulatory compliance and data security across all processes."
    },
    {
      icon: <Language sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: "Cloud Solutions",
      description: "Scalable cloud-based BPM solutions accessible from anywhere, anytime."
    },
    {
      icon: <People sx={{ fontSize: 32, color: 'primary.main' }} />,
      title: "Team Collaboration",
      description: "Foster collaboration and communication across teams and departments."
    }
  ];

  const industries = [
    "Healthcare", "Manufacturing", "Finance", "Retail", "Education", 
    "Government", "Technology", "Transportation", "Energy", "Real Estate"
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      expertise: "15+ years in enterprise software"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      expertise: "AI & Process Optimization"
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      expertise: "UX Design & User Research"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      expertise: "Scalable Architecture"
    }
  ];

  return (
    <div>
      {/* Navigation */}
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #e2e8f0' }}>
        <Toolbar>
          <Typography variant="h4" component="h1" sx={{ color: 'primary.main', fontWeight: 'bold', flexGrow: 1 }}>
            RECUD
          </Typography>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
            <Button color="inherit" href="#services" sx={{ color: '#374151', '&:hover': { color: 'primary.main' } }}>
              Services
            </Button>
            <Button color="inherit" href="#industries" sx={{ color: '#374151', '&:hover': { color: 'primary.main' } }}>
              Industries
            </Button>
            <Button color="inherit" href="#team" sx={{ color: '#374151', '&:hover': { color: 'primary.main' } }}>
              Team
            </Button>
            <Button color="inherit" href="#contact" sx={{ color: '#374151', '&:hover': { color: 'primary.main' } }}>
              Contact
            </Button>
            <Button variant="contained" color="primary" sx={{ borderRadius: 2 }}>
              Request Demo
            </Button>
          </Box>

          {/* Mobile menu button */}
          <IconButton
            sx={{ display: { md: 'none' } }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            color="inherit"
          >
            {isMenuOpen ? <Close /> : <Menu />}
          </IconButton>
        </Toolbar>

        {/* Mobile Navigation */}
        <Drawer
          anchor="top"
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          sx={{ display: { md: 'none' } }}
        >
          <Box sx={{ width: '100%', pt: 8, pb: 2, px: 2 }}>
            <List>
              <ListItem>
                <ListItemText>
                  <Button fullWidth href="#services" sx={{ justifyContent: 'flex-start' }}>
                    Services
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Button fullWidth href="#industries" sx={{ justifyContent: 'flex-start' }}>
                    Industries
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Button fullWidth href="#team" sx={{ justifyContent: 'flex-start' }}>
                    Team
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Button fullWidth href="#contact" sx={{ justifyContent: 'flex-start' }}>
                    Contact
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Button fullWidth variant="contained" color="primary" sx={{ borderRadius: 2 }}>
                    Request Demo
                  </Button>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ 
        pt: 15, 
        pb: 8, 
        background: 'linear-gradient(135deg, #f0f4ff 0%, #f8faff 50%, #ffffff 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Left Content Area */}
            <Grid item xs={12} lg={7}>
              {/* Tagline Pill */}
              <Box sx={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 1,
                backgroundColor: '#e0f2fe',
                color: '#0c4a6e',
                px: 3,
                py: 1,
                borderRadius: '50px',
                mb: 3,
                fontSize: '0.875rem',
                fontWeight: 500
              }}>
                <FlashOn sx={{ fontSize: 16 }} />
                Streamline Your Business Processes
              </Box>

              {/* Main Headline */}
              <Typography variant="h1" sx={{ 
                fontWeight: 800, 
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                lineHeight: 1.1,
                color: '#1e293b'
              }}>
                Transform Your{' '}
                <Box component="span" sx={{ color: '#2563eb' }}>
                  Business
                </Box>{' '}
                <Box component="span" sx={{ color: '#7c3aed' }}>
                  Operations
                </Box>{' '}
                with Intelligent BPM Solutions
              </Typography>

              {/* Description */}
              <Typography variant="h6" sx={{ 
                color: '#64748b', 
                mb: 4, 
                lineHeight: 1.6,
                fontSize: '1.125rem',
                maxWidth: '600px'
              }}>
                RECUD specializes in designing and developing cutting-edge business process management software 
                tailored for various industries. Automate, optimize, and scale your operations with our proven solutions.
              </Typography>

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 6 }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontSize: '1.125rem', 
                    borderRadius: 2,
                    backgroundColor: '#2563eb',
                    '&:hover': { backgroundColor: '#1d4ed8' }
                  }}
                >
                  Get Started Today →
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  startIcon={<Box component="span" sx={{ fontSize: '1.5rem', color: '#64748b' }}>▷</Box>}
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontSize: '1.125rem', 
                    borderRadius: 2,
                    borderColor: '#cbd5e1',
                    color: '#475569',
                    '&:hover': { 
                      borderColor: '#94a3b8',
                      backgroundColor: '#f8fafc'
                    }
                  }}
                >
                  Watch Demo
                </Button>
              </Box>

              {/* Statistics Section */}
              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 800, 
                    color: '#1e293b',
                    fontSize: '2.5rem'
                  }}>
                    500+
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                    Clients Served
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 800, 
                    color: '#1e293b',
                    fontSize: '2.5rem'
                  }}>
                    50+
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                    Industries
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 800, 
                    color: '#1e293b',
                    fontSize: '2.5rem'
                  }}>
                    99%
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                    Uptime
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Content Area - Process Steps */}
            <Grid item xs={12} lg={5}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 3,
                alignItems: { xs: 'center', lg: 'flex-start' }
              }}>
                {/* Process Step 1 */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  backgroundColor: 'white',
                  p: 3,
                  borderRadius: 3,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  width: '100%',
                  maxWidth: '400px'
                }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    backgroundColor: '#2563eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.25rem'
                  }}>
                    1
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b' }}>
                    Data Input
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', ml: 'auto' }}>
                    Seamless data collection
                  </Typography>
                </Box>

                {/* Process Step 2 */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  backgroundColor: 'white',
                  p: 3,
                  borderRadius: 3,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  width: '100%',
                  maxWidth: '400px'
                }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    backgroundColor: '#7c3aed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.25rem'
                  }}>
                    2
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b' }}>
                    Process Automation
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', ml: 'auto' }}>
                    Intelligent workflow automation
                  </Typography>
                </Box>

                {/* Process Step 3 */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  backgroundColor: 'white',
                  p: 3,
                  borderRadius: 3,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  width: '100%',
                  maxWidth: '400px'
                }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    backgroundColor: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.25rem'
                  }}>
                    3
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b' }}>
                    Analytics & Insights
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', ml: 'auto' }}>
                    Real-time performance metrics
                  </Typography>
                </Box>

                {/* Process Step 4 */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  backgroundColor: 'white',
                  p: 3,
                  borderRadius: 3,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  width: '100%',
                  maxWidth: '400px'
                }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    backgroundColor: '#f59e0b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.25rem'
                  }}>
                    4
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b' }}>
                    Optimization
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', ml: 'auto' }}>
                    Continuous improvement
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ py: 10, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Comprehensive BPM Solutions
            </Typography>
            <Typography variant="h6" sx={{ color: '#4b5563', maxWidth: '600px', mx: 'auto' }}>
              From process automation to advanced analytics, we provide end-to-end solutions 
              that transform how businesses operate.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{ 
                  p: 4, 
                  height: '100%',
                  backgroundColor: '#f8fafc',
                  '&:hover': { 
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease'
                  }
                }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'semibold', mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Industries Section */}
      <Box id="industries" sx={{ py: 10, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Serving All Industries
            </Typography>
            <Typography variant="h6" sx={{ color: '#4b5563', maxWidth: '600px', mx: 'auto' }}>
              Our solutions are designed to adapt to the unique challenges and requirements 
              of any industry, ensuring maximum value and impact.
            </Typography>
          </Box>
          
          <Grid container spacing={3}>
            {industries.map((industry, index) => (
              <Grid item xs={6} md={2.4} key={index}>
                <Paper sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  backgroundColor: 'white',
                  '&:hover': { boxShadow: 3 }
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 'semibold' }}>
                    {industry}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box id="team" sx={{ py: 10, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Meet Our Expert Team
            </Typography>
            <Typography variant="h6" sx={{ color: '#4b5563', maxWidth: '600px', mx: 'auto' }}>
              Our team brings together decades of experience in enterprise software, 
              process optimization, and user experience design.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box sx={{ 
                    width: 96, 
                    height: 96, 
                    backgroundColor: 'primary.50', 
                    borderRadius: '50%', 
                    mx: 'auto', 
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <People sx={{ fontSize: 48, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 'semibold', mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'medium', mb: 1 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.expertise}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 10, backgroundColor: 'primary.main' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: 'white' }}>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="h6" sx={{ color: 'primary.100', mb: 4 }}>
              See how RECUD can streamline your operations and drive growth. 
              Request a personalized demo today.
            </Typography>
            <Button 
              variant="contained" 
              sx={{ 
                backgroundColor: 'white', 
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.125rem',
                borderRadius: 2,
                '&:hover': { backgroundColor: '#f3f4f6' }
              }}
            >
              Request Demo
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 10, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Get in Touch
            </Typography>
            <Typography variant="h6" sx={{ color: '#4b5563', maxWidth: '600px', mx: 'auto' }}>
              Ready to discuss how RECUD can help your business? 
              Contact us for a consultation or demo.
            </Typography>
          </Box>
          
          <Grid container spacing={6}>
            <Grid item xs={12} lg={6}>
              <Typography variant="h4" sx={{ fontWeight: 'semibold', mb: 3 }}>
                Contact Information
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Mail sx={{ color: 'primary.main', mr: 1.5 }} />
                  <Typography color="text.secondary">hello@recud.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Phone sx={{ color: 'primary.main', mr: 1.5 }} />
                  <Typography color="text.secondary">+1 (555) 123-4567</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn sx={{ color: 'primary.main', mr: 1.5 }} />
                  <Typography color="text.secondary">San Francisco, CA</Typography>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} lg={6}>
              <Typography variant="h4" sx={{ fontWeight: 'semibold', mb: 3 }}>
                Send us a Message
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      placeholder="First Name"
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      placeholder="Last Name"
                      variant="outlined"
                      size="medium"
                    />
                  </Grid>
                </Grid>
                <TextField
                  fullWidth
                  type="email"
                  placeholder="Email"
                  variant="outlined"
                  size="medium"
                />
                <TextField
                  fullWidth
                  placeholder="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  size="medium"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ py: 1.5, borderRadius: 2 }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#111827', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.400', mb: 2 }}>
                RECUD
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Transforming business operations through intelligent process management solutions.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body2" color="text.secondary">Process Automation</Typography>
                <Typography variant="body2" color="text.secondary">Workflow Management</Typography>
                <Typography variant="body2" color="text.secondary">Analytics & Insights</Typography>
                <Typography variant="body2" color="text.secondary">Cloud Solutions</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Company
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body2" color="text.secondary">About Us</Typography>
                <Typography variant="body2" color="text.secondary">Team</Typography>
                <Typography variant="body2" color="text.secondary">Careers</Typography>
                <Typography variant="body2" color="text.secondary">Contact</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Connect
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body2" color="text.secondary">LinkedIn</Typography>
                <Typography variant="body2" color="text.secondary">Twitter</Typography>
                <Typography variant="body2" color="text.secondary">Blog</Typography>
                <Typography variant="body2" color="text.secondary">Newsletter</Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: '1px solid #374151', mt: 4, pt: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              &copy; 2024 RECUD. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
