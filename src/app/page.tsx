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
  Cloud,
  Mail,
  Phone,
  LocationOn,
  Menu,
  Close,
  AutoAwesome,
  AccountTree
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
      icon: <BarChart sx={{ fontSize: 40, color: '#f97316' }} />,
      title: "Analytics & Insights",
      description: "Gain deep insights into your business processes with advanced analytics. Make data-driven decisions to optimize performance.",
      features: [
        "Custom dashboards & reports",
        "Process bottlenecks identification", 
        "Performance metrics tracking",
        "Predictive analytics"
      ]
    },
    {
      icon: <Security sx={{ fontSize: 40, color: '#ef4444' }} />,
      title: "Compliance & Security",
      description: "Maintain regulatory compliance and data security throughout your processes. Built-in audit trails and security controls.",
      features: [
        "Audit trail & logging",
        "GDPR & HIPAA compliance",
        "Access control & permissions",
        "Data encryption & security"
      ]
    },
    {
      icon: <Cloud sx={{ fontSize: 40, color: '#8b5cf6' }} />,
      title: "Cloud Integration",
      description: "Connect with your existing cloud services and applications. Seamlessly integrate with popular SaaS platforms.",
      features: [
        "Pre-built integrations",
        "API-first architecture",
        "Real-time data sync",
        "Scalable cloud infrastructure"
      ]
    },
    {
      icon: <FlashOn sx={{ fontSize: 40, color: '#10b981' }} />,
      title: "Process Automation",
      description: "Streamline workflows and eliminate manual tasks with intelligent automation solutions that adapt to your business needs.",
      features: [
        "Workflow automation",
        "Task scheduling & routing",
        "Exception handling",
        "Performance monitoring"
      ]
    },
    {
      icon: <AccountTree sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: "Workflow Design",
      description: "Design, implement, and optimize complex business workflows with our intuitive drag-and-drop workflow builder.",
      features: [
        "Visual workflow designer",
        "Process modeling tools",
        "Business rule engine",
        "Workflow templates"
      ]
    },
    {
      icon: <People sx={{ fontSize: 40, color: '#06b6d4' }} />,
      title: "Team Collaboration",
      description: "Foster collaboration and communication across teams and departments with integrated collaboration tools.",
      features: [
        "Team workspaces",
        "Real-time notifications",
        "Document sharing",
        "Communication tools"
      ]
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
      <AppBar position="fixed" elevation={0} sx={{ 
        background: 'linear-gradient(135deg, #f0f9ff 0%, #f8fafc 50%, #ffffff 100%)',
        backdropFilter: 'blur(8px)'
      }}>
        <Toolbar sx={{ 
          py: 0.75, 
          px: { xs: 2, md: 3 },
          minHeight: '60px !important'
        }}>
          {/* Left Side - Logo and Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1 }}>
            {/* Logo SVG */}
            <Box 
              component="img" 
              src="/logo.svg" 
              alt="RECUD Logo"
              sx={{ 
                height: 28,
                width: 28,
                filter: 'none',
                backgroundColor: 'transparent',
                background: 'none',
                opacity: 0.7,
                mixBlendMode: 'multiply',
                transition: 'all 0.3s ease'
              }}
            />
            
            {/* Brand Text with Gradient */}
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ 
                background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: '#1e293b',
                fontWeight: 800,
                fontSize: '1.85rem',
                letterSpacing: '-0.025em',
                textShadow: '0 2px 4px rgba(59, 130, 246, 0.1)',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%)',
                  borderRadius: 1,
                  opacity: 0.3
                }
              }}
            >
              RECUD
            </Typography>
          </Box>
          
          {/* Center - Navigation Links */}
          <Box sx={{ 
            display: { xs: 'none', lg: 'flex' }, 
            alignItems: 'center', 
            gap: 2.5,
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }}>
            <Button 
              color="inherit" 
              href="#services" 
              sx={{ 
                color: '#374151', 
                fontWeight: 500,
                fontSize: '0.9rem',
                textTransform: 'none',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                '&:hover': { 
                  color: '#1e293b',
                  backgroundColor: 'rgba(59, 130, 246, 0.05)'
                }
              }}
            >
              Services
            </Button>
            <Button 
              color="inherit" 
              href="#industries" 
              sx={{ 
                color: '#374151', 
                fontWeight: 500,
                fontSize: '0.9rem',
                textTransform: 'none',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                '&:hover': { 
                  color: '#1e293b',
                  backgroundColor: 'rgba(59, 130, 246, 0.05)'
                }
              }}
            >
              Industries
            </Button>
            <Button 
              color="inherit" 
              href="#team" 
              sx={{ 
                color: '#374151', 
                fontWeight: 500,
                fontSize: '0.9rem',
                textTransform: 'none',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                '&:hover': { 
                  color: '#1e293b',
                  backgroundColor: 'rgba(59, 130, 246, 0.05)'
                }
              }}
            >
              About
            </Button>
            <Button 
              color="inherit" 
              href="#contact" 
              sx={{ 
                color: '#374151', 
                fontWeight: 500,
                fontSize: '0.9rem',
                textTransform: 'none',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                '&:hover': { 
                  color: '#1e293b',
                  backgroundColor: 'rgba(59, 130, 246, 0.05)'
                }
              }}
            >
              Contact
            </Button>
          </Box>

          {/* Right Side - CTA Buttons */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            alignItems: 'center', 
            gap: 1
          }}>
            <Button 
              variant="outlined"
              sx={{ 
                borderColor: '#d1d5db',
                color: '#374151',
                fontWeight: 500,
                fontSize: '0.9rem',
                textTransform: 'none',
                px: 2.5,
                py: 1,
                borderRadius: 1.5,
                borderWidth: 1.5,
                '&:hover': { 
                  borderColor: '#9ca3af',
                  backgroundColor: '#f9fafb',
                  borderWidth: 1.5
                }
              }}
            >
              Get Started
            </Button>
            <Button 
              variant="contained"
              sx={{ 
                backgroundColor: '#3b82f6',
                color: 'white',
                fontWeight: 500,
                fontSize: '0.9rem',
                textTransform: 'none',
                px: 2.5,
                py: 1,
                borderRadius: 1.5,
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                '&:hover': { 
                  backgroundColor: '#2563eb',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }
              }}
            >
              Contact Us
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
                    About
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
                  <Button fullWidth variant="outlined" sx={{ borderRadius: 2, mb: 1 }}>
                    Get Started
                  </Button>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Button fullWidth variant="contained" color="primary" sx={{ borderRadius: 2 }}>
                    Contact Us
                  </Button>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ 
        pt: { xs: 6, md: 7 }, 
        pb: { xs: 8, md: 12 }, 
        background: 'linear-gradient(135deg, #f0f9ff 0%, #f8fafc 50%, #ffffff 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 4, lg: 8 }} alignItems="center">
            {/* Left Content Area */}
            <Grid item xs={12} lg={7}>
              {/* Tagline Pill */}
              <Box sx={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 1,
                backgroundColor: '#dbeafe',
                color: '#1e40af',
                px: 3,
                py: 1,
                borderRadius: '50px',
                mb: 3,
                fontSize: '0.875rem',
                fontWeight: 500,
                border: '1px solid #bfdbfe'
              }}>
                <FlashOn sx={{ fontSize: 16, color: '#3b82f6' }} />
                Streamline Your Business Processes
              </Box>

              {/* Main Headline */}
              <Typography variant="h1" sx={{ 
                fontWeight: 800, 
                mb: 3,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                lineHeight: 1.1,
                color: '#1e293b',
                letterSpacing: '-0.02em'
              }}>
                Transform Your{' '}
                <Box component="span" sx={{ 
                  color: '#3b82f6',
                  position: 'relative'
                }}>
                  Business
                </Box>{' '}
                <Box component="span" sx={{ 
                  color: '#7c3aed',
                  position: 'relative'
                }}>
                  Operations
                </Box>{' '}
                with Intelligent BPM Solutions
              </Typography>

              {/* Description */}
              <Typography variant="h6" sx={{ 
                color: '#64748b', 
                mb: 4, 
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.125rem' },
                maxWidth: '600px',
                fontWeight: 400
              }}>
                RECUD specializes in designing and developing cutting-edge business process management software 
                tailored for various industries. Automate, optimize, and scale your operations with our proven solutions.
              </Typography>

              {/* CTA Buttons */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 6 }}>
                <Button 
                  variant="contained" 
                  size="large"
                  endIcon={<ArrowForward sx={{ fontSize: 20 }} />}
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontSize: '1.125rem', 
                    borderRadius: 2,
                    backgroundColor: '#3b82f6',
                    fontWeight: 600,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    '&:hover': { 
                      backgroundColor: '#2563eb',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                    }
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
                    borderColor: '#d1d5db',
                    color: '#374151',
                    fontWeight: 500,
                    borderWidth: 1.5,
                    '&:hover': { 
                      borderColor: '#9ca3af',
                      backgroundColor: '#f9fafb',
                      borderWidth: 1.5
                    }
                  }}
                >
                  Watch Demo
                </Button>
              </Box>

              {/* Statistics Section */}
              <Box sx={{ display: 'flex', gap: { xs: 3, md: 6 }, flexWrap: 'wrap' }}>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="h2" sx={{ 
                    fontWeight: 800, 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    lineHeight: 1,
                    mb: 0.5
                  }}>
                    500+
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: '#64748b', 
                    fontWeight: 500,
                    fontSize: '0.875rem'
                  }}>
                    Clients Served
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="h2" sx={{ 
                    fontWeight: 800, 
                    background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    lineHeight: 1,
                    mb: 0.5
                  }}>
                    50+
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: '#64748b', 
                    fontWeight: 500,
                    fontSize: '0.875rem'
                  }}>
                    Industries
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="h2" sx={{ 
                    fontWeight: 800, 
                    background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    lineHeight: 1,
                    mb: 0.5
                  }}>
                    99%
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: '#64748b', 
                    fontWeight: 500,
                    fontSize: '0.875rem'
                  }}>
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
                  gap: 3,
                  p: 3,
                  borderRadius: 3,
                  width: '100%',
                  maxWidth: '420px',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    transform: 'translateY(-1px)'
                  }
                }}>
                  <Box sx={{ 
                    width: 56, 
                    height: 56, 
                    borderRadius: '50%', 
                    backgroundColor: '#3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)'
                  }}>
                    1
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600, 
                      color: '#1e293b',
                      fontSize: '1.125rem',
                      mb: 0.5
                    }}>
                      Data Input
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Seamless data collection
                    </Typography>
                  </Box>
                </Box>

                {/* Process Step 2 */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 3,
                  p: 3,
                  borderRadius: 3,
                  width: '100%',
                  maxWidth: '420px',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    transform: 'translateY(-1px)'
                  }
                }}>
                  <Box sx={{ 
                    width: 56, 
                    height: 56, 
                    borderRadius: '50%', 
                    backgroundColor: '#7c3aed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    boxShadow: '0 4px 6px -1px rgba(124, 58, 237, 0.3)'
                  }}>
                    2
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600, 
                      color: '#1e293b',
                      fontSize: '1.125rem',
                      mb: 0.5
                    }}>
                      Process Automation
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Intelligent workflow automation
                    </Typography>
                  </Box>
                </Box>

                {/* Process Step 3 */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 3,
                  p: 3,
                  borderRadius: 3,
                  width: '100%',
                  maxWidth: '420px',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    transform: 'translateY(-1px)'
                  }
                }}>
                  <Box sx={{ 
                    width: 56, 
                    height: 56, 
                    borderRadius: '50%', 
                    backgroundColor: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.3)'
                  }}>
                    3
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600, 
                      color: '#1e293b',
                      fontSize: '1.125rem',
                      mb: 0.5
                    }}>
                      Analytics & Insights
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Real-time performance metrics
                    </Typography>
                  </Box>
                </Box>

                {/* Process Step 4 */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 3,
                  p: 3,
                  borderRadius: 3,
                  width: '100%',
                  maxWidth: '420px',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    transform: 'translateY(-1px)'
                  }
                }}>
                  <Box sx={{ 
                    width: 56, 
                    height: 56, 
                    borderRadius: '50%', 
                    backgroundColor: '#f59e0b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    boxShadow: '0 4px 6px -1px rgba(245, 158, 11, 0.3)'
                  }}>
                    4
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600, 
                      color: '#1e293b',
                      fontSize: '1.125rem',
                      mb: 0.5
                    }}>
                      Optimization
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      Continuous improvement
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ py: 20, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h1" component="h2" sx={{ 
              fontWeight: 800, 
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '2.3rem' },
              lineHeight: 1.1,
              color: '#1e293b',
              letterSpacing: '-0.02em'
            }}>
              Comprehensive BPM Solutions
            </Typography>
            <Typography variant="h6" sx={{ 
              color: '#64748b', 
              mb: 4, 
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.125rem' },
              maxWidth: '600px',
              mx: 'auto',
              fontWeight: 400
            }}>
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
                  backgroundColor: 'white',
                  borderRadius: 3,
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                  '&:hover': { 
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}>
                  <CardContent sx={{ p: 0 }}>
                    {/* Icon */}
                    <Box sx={{ 
                      width: 64, 
                      height: 64, 
                      borderRadius: 2, 
                      backgroundColor: service.icon.props.sx.color + '20',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3
                    }}>
                      {service.icon}
                    </Box>
                    
                    {/* Title */}
                    <Typography variant="h5" component="h3" sx={{ 
                      fontWeight: 700, 
                      mb: 2,
                      color: '#1e293b',
                      fontSize: '1.25rem'
                    }}>
                      {service.title}
                    </Typography>
                    
                    {/* Description */}
                    <Typography variant="body1" sx={{ 
                      color: '#64748b',
                      mb: 3,
                      lineHeight: 1.6
                    }}>
                      {service.description}
                    </Typography>
                    
                    {/* Features List */}
                    <Box sx={{ mb: 3 }}>
                      {service.features.map((feature, featureIndex) => (
                        <Box key={featureIndex} sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          mb: 1,
                          color: '#374151',
                          fontSize: '0.875rem'
                        }}>
                          <Box sx={{ 
                            width: 4, 
                            height: 4, 
                            borderRadius: '50%', 
                            backgroundColor: '#374151',
                            mr: 1.5,
                            flexShrink: 0
                          }} />
                          {feature}
                        </Box>
                      ))}
                    </Box>
                    
                    {/* Learn More Link */}
                    <Typography variant="body2" sx={{ 
                      color: '#1e293b',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#374151'
                      }
                    }}>
                      Learn More →
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          {/* Call to Action Button */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button 
              variant="contained" 
              size="large"
              sx={{
                backgroundColor: '#3b82f6',
                color: 'white',
                px: 6,
                py: 2,
                fontSize: '1.125rem',
                fontWeight: 600,
                borderRadius: 2,
                boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)',
                '&:hover': {
                  backgroundColor: '#2563eb',
                  boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.4)',
                  transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              Explore All Services →
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Industries Section */}
      <Box id="industries" sx={{ py: 20, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 16 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 4 }}>
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
      <Box id="team" sx={{ py: 20, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 16 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 4 }}>
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
                    mb: 4,
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
      <Box sx={{ py: 20, backgroundColor: 'primary.main' }}>
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
      <Box id="contact" sx={{ py: 20, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 16 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 4 }}>
              Get in Touch
            </Typography>
            <Typography variant="h6" sx={{ color: '#4b5563', maxWidth: '600px', mx: 'auto' }}>
              Ready to discuss how RECUD can help your business? 
              Contact us for a consultation or demo.
            </Typography>
          </Box>
          
          <Grid container spacing={6}>
            <Grid item xs={12} lg={6}>
              <Typography variant="h4" sx={{ fontWeight: 'semibold', mb: 6 }}>
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
              <Typography variant="h4" sx={{ fontWeight: 'semibold', mb: 6 }}>
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
      <Box sx={{ backgroundColor: '#111827', color: 'white', py: 12 }}>
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
          <Box sx={{ borderTop: '1px solid #374151', mt: 8, pt: 8, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              &copy; 2024 RECUD. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
