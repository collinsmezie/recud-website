'use client';

import React from 'react';
import { useState, useEffect, useRef } from 'react';
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
  AccountTree,
  AccountBalance,
  ShoppingCart,
  PrecisionManufacturing,
  HealthAndSafety,
  School,
  Shield,
  WorkspacePremium,
  Groups,
  Public,
  TrendingUp,
  TaskAlt,
  AccessTime,
  HeadsetMic,
  Send
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel
} from '@mui/material';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const services = [
    {
      icon: <Shield sx={{ fontSize: 24, color: '#2563eb' }} />,
      title: "Compliance Management",
      description: "Ensure regulatory compliance with automated checks, audit trails, and compliance reporting.",
      features: [
        "Regulatory Compliance",
        "Audit Trails",
        "Risk Management",
        "Policy Enforcement"
      ]
    },
    {
      icon: <FlashOn sx={{ fontSize: 24, color: '#2563eb' }} />,
      title: "Cloud Solutions",
      description: "Deploy scalable cloud-native solutions that grow with your business and ensure high availability.",
      features: [
        "Cloud Migration",
        "Auto-scaling",
        "Disaster Recovery",
        "Performance Optimization"
      ]
    },
    {
      icon: <People sx={{ fontSize: 24, color: '#2563eb' }} />,
      title: "User Experience",
      description: "Create intuitive interfaces and seamless user experiences that drive adoption and productivity.",
      features: [
        "UX/UI Design",
        "Mobile Apps",
        "User Training",
        "Support Portal"
      ]
    },
    {
      icon: <Settings sx={{ fontSize: 24, color: '#2563eb' }} />,
      title: "Process Automation",
      description: "Automate complex workflows with rules, approvals, and integrations across your toolchain.",
      features: [
        "Workflow Orchestration",
        "Business Rules",
        "Approvals",
        "Integrations"
      ]
    },
    {
      icon: <BarChart sx={{ fontSize: 24, color: '#2563eb' }} />,
      title: "Analytics & Insights",
      description: "Gain real-time visibility with dashboards, KPIs, and predictive analytics for better decisions.",
      features: [
        "Dashboards",
        "KPI Tracking",
        "Predictive Analytics",
        "Reporting"
      ]
    },
    {
      icon: <AccountTree sx={{ fontSize: 24, color: '#2563eb' }} />,
      title: "Systems Integration",
      description: "Connect CRMs, ERPs, and third-party services to build a unified, streamlined operation.",
      features: [
        "API Connectors",
        "Data Sync",
        "Event-driven Flows",
        "ETL Pipelines"
      ]
    }
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

  type JourneyEvent = { year: string; title: string; desc: string; side: 'left' | 'right' };

  const TimelineItem = ({ event }: { event: JourneyEvent }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    const isLeft = event.side === 'left';

    return (
      <Grid container ref={containerRef} sx={{ position: 'relative', py: { xs: 3, md: 4 } }}>
        {isLeft ? (
          <>
            <Grid item xs={12} md={6}>
              <Card sx={{
                mr: { md: 6 }, p: 3, borderRadius: 2, boxShadow: '0 10px 20px rgba(0,0,0,0.06)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0) translateY(0)' : 'translateX(-24px) translateY(8px)',
                transition: 'all 600ms ease'
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ color: '#2563eb', fontWeight: 700 }}>{event.year}</Typography>
                  <Typography variant="subtitle1" sx={{ color: '#111827', fontWeight: 700 }}>{event.title}</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#6b7280' }}>{event.desc}</Typography>
              </Card>
            </Grid>
            <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }} />
          </>
        ) : (
          <>
            <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }} />
            <Grid item xs={12} md={6}>
              <Card sx={{
                ml: { md: 6 }, p: 3, borderRadius: 2, boxShadow: '0 10px 20px rgba(0,0,0,0.06)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0) translateY(0)' : 'translateX(24px) translateY(8px)',
                transition: 'all 600ms ease'
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ color: '#2563eb', fontWeight: 700 }}>{event.year}</Typography>
                  <Typography variant="subtitle1" sx={{ color: '#111827', fontWeight: 700 }}>{event.title}</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#6b7280' }}>{event.desc}</Typography>
              </Card>
            </Grid>
          </>
        )}

        <Box sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 12, height: 12, backgroundColor: '#2563eb', borderRadius: '50%', boxShadow: '0 0 0 4px #e0ebff' }} />
      </Grid>
    );
  };

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
                px: 2,
                py: 0.8,
                borderRadius: '50px',
                mb: 2,
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
                mb: 0,
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
      <Box id="services" sx={{ 
        py: { xs: 10, md: 20 }, 
        backgroundColor: 'white',
        position: 'relative'
      }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 800,
              color: '#1e293b',
              mb: 2
            }}>
              Our Services
            </Typography>
            <Typography variant="h6" sx={{
              color: '#64748b',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.125rem' }
            }}>
              Discover how our comprehensive suite of BPM solutions can help streamline your operations and drive business growth.
            </Typography>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                  transition: 'all .25s ease',
                  background: 'linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 16px 30px rgba(0,0,0,0.08)'
                  }
                }}>
                  {/* Icon */}
                  <Box sx={{ 
                    mb: 3,
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#eff6ff',
                    boxShadow: 'inset 0 0 0 1px #dbeafe'
                  }}>
                    {service.icon}
                  </Box>

                  {/* Content */}
                  <Typography variant="h5" sx={{ 
                    fontWeight: 800,
                    color: '#0f172a',
                    mb: 1
                  }}>
                    {service.title}
                  </Typography>
                  
                  <Typography sx={{ 
                    color: '#475569',
                    mb: 2,
                    flexGrow: 1
                  }}>
                    {service.description}
                  </Typography>

                  {/* Features List */}
                  <Box sx={{ mb: 3 }}>
                    {service.features.map((feature, idx) => (
                      <Box key={idx} sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 0.75,
                        color: '#334155'
                      }}>
                        <TaskAlt sx={{ fontSize: 18, color: '#10b981' }} />
                        <Typography sx={{ 
                          color: '#334155',
                          fontSize: '0.9375rem'
                        }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Learn More Button */}
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 'auto',
                      color: '#2563eb',
                      borderColor: '#bfdbfe',
                      '&:hover': {
                        borderColor: '#2563eb',
                        backgroundColor: 'rgba(37, 99, 235, 0.04)'
                      },
                      textTransform: 'none',
                      fontWeight: 600,
                      borderRadius: 1.5,
                      py: 1
                    }}
                  >
                    Learn More →
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* CTA Section */}
          <Box sx={{ 
            mt: 12,
            p: { xs: 4, md: 8 },
            borderRadius: 4,
            backgroundColor: '#f8fafc',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Typography variant="h3" sx={{
              fontWeight: 800,
              color: '#1e293b',
              mb: 2,
              fontSize: { xs: '1.875rem', md: '2.25rem' }
            }}>
              Ready to Transform Your Business?
            </Typography>
            
            <Typography sx={{
              color: '#64748b',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.125rem' }
            }}>
              Let's discuss how our BPM solutions can help you achieve operational excellence and drive sustainable growth.
            </Typography>
            
            <Box sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center'
            }}>
              <Button
                variant="contained"
                sx={{
                  px: 4,
                  py: 1.5,
                  backgroundColor: '#3b82f6',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#2563eb'
                  }
                }}
              >
                Schedule Consultation →
              </Button>
              
              <Button
                variant="outlined"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderColor: '#d1d5db',
                  color: '#374151',
                  fontWeight: 500,
                  textTransform: 'none',
                  borderRadius: 2,
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: '#9ca3af',
                    backgroundColor: '#f9fafb'
                  }
                }}
              >
                Download Brochure
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Industries Section */}
      <Box id="industries" sx={{ py: 20, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 800,
              color: '#1e293b',
              mb: 2
            }}>
              Industry-Specific Solutions
            </Typography>
            <Typography variant="h6" sx={{
              color: '#64748b',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.125rem' }
            }}>
              Tailored BPM solutions designed for the unique challenges and requirements of your industry.
            </Typography>
          </Box>
          
          <Grid container spacing={4} alignItems="stretch">
            {/* Financial Services */}
            <Grid item xs={12} md={6}>
              <Card sx={{ 
                p: 4, 
                borderRadius: 3, 
                border: '1px solid #e5e7eb',
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                transition: 'all .25s ease',
                background: 'linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)',
                '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 16px 30px rgba(0,0,0,0.08)' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 2, mb: 2.5, alignItems: 'start' }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: 2, backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1px #dbeafe' }}>
                      <AccountBalance sx={{ color: '#2563eb' }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 0.5 }}>Financial Services</Typography>
                      <Typography variant="body1" sx={{ color: '#475569' }}>
                        Transform banking operations, loan processing, and compliance management with intelligent BPM solutions.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 800, mb: 1.5 }}>Key Solutions</Typography>
                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                        {['Digital onboarding','Risk assessment','Regulatory compliance','Fraud detection'].map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#334155' }}>
                            <TaskAlt sx={{ fontSize: 18, color: '#10b981' }} />
                            <Typography variant="body2">{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 800, mb: 1.5 }}>Results Achieved</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {['85% faster processing','40% cost reduction','99.9% accuracy'].map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#334155' }}>
                            <TrendingUp sx={{ fontSize: 18, color: '#3b82f6' }} />
                            <Typography variant="body2">{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* E-commerce & Retail */}
            <Grid item xs={12} md={6}>
              <Card sx={{ 
                p: 4, 
                borderRadius: 3, 
                border: '1px solid #e5e7eb',
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                transition: 'all .25s ease',
                background: 'linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)',
                '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 16px 30px rgba(0,0,0,0.08)' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 2, mb: 2.5, alignItems: 'start' }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: 2, backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1px #dbeafe' }}>
                      <ShoppingCart sx={{ color: '#2563eb' }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 0.5 }}>E-commerce & Retail</Typography>
                      <Typography variant="body1" sx={{ color: '#475569' }}>
                        Streamline order processing, inventory management, and customer service workflows.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 800, mb: 1.5 }}>Key Solutions</Typography>
                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                        {['Order processing','Inventory optimization','Returns management','Customer support'].map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#334155' }}>
                            <TaskAlt sx={{ fontSize: 18, color: '#10b981' }} />
                            <Typography variant="body2">{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 800, mb: 1.5 }}>Results Achieved</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {['60% faster fulfillment','30% fewer returns','25% cost savings'].map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#334155' }}>
                            <TrendingUp sx={{ fontSize: 18, color: '#3b82f6' }} />
                            <Typography variant="body2">{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Logistics & Transportation */}
            <Grid item xs={12} md={6}>
              <Card sx={{ 
                p: 4, 
                borderRadius: 3, 
                border: '1px solid #e5e7eb',
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                transition: 'all .25s ease',
                background: 'linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)',
                '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 16px 30px rgba(0,0,0,0.08)' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 2, mb: 2.5, alignItems: 'start' }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: 2, backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1px #dbeafe' }}>
                      <PrecisionManufacturing sx={{ color: '#2563eb' }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 0.5 }}>Logistics & Transportation</Typography>
                      <Typography variant="body1" sx={{ color: '#475569' }}>
                        Streamline fleet management, route optimization, and delivery tracking for logistics companies.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 800, mb: 1.5 }}>Key Solutions</Typography>
                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                        {['Fleet Management','Delivery Tracking','Route Optimization','Driver Management'].map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#334155' }}>
                            <TaskAlt sx={{ fontSize: 18, color: '#10b981' }} />
                            <Typography variant="body2">{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 800, mb: 1.5 }}>Results Achieved</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {['40% route efficiency','90% on-time delivery','50% fuel savings'].map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#334155' }}>
                            <TrendingUp sx={{ fontSize: 18, color: '#3b82f6' }} />
                            <Typography variant="body2">{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Healthcare & Life Sciences */}
            <Grid item xs={12} md={6}>
              <Card sx={{ 
                p: 4, 
                borderRadius: 3, 
                border: '1px solid #e5e7eb',
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                transition: 'all .25s ease',
                background: 'linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)',
                '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 16px 30px rgba(0,0,0,0.08)' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 2, mb: 2.5, alignItems: 'start' }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: 2, backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1px #dbeafe' }}>
                      <HealthAndSafety sx={{ color: '#2563eb' }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 0.5 }}>Healthcare & Life Sciences</Typography>
                      <Typography variant="body1" sx={{ color: '#475569' }}>
                        Enhance patient care workflows, research management, and regulatory compliance.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 800, mb: 1.5 }}>Key Solutions</Typography>
                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                        {['Patient onboarding','Clinical workflows','HIPAA compliance','Claims processing'].map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#334155' }}>
                            <TaskAlt sx={{ fontSize: 18, color: '#10b981' }} />
                            <Typography variant="body2">{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 800, mb: 1.5 }}>Results Achieved</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {['70% faster onboarding','90% compliance rate','50% error reduction'].map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#334155' }}>
                            <TrendingUp sx={{ fontSize: 18, color: '#3b82f6' }} />
                            <Typography variant="body2">{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Education & Training */}
            <Grid item xs={12} md={6}>
              <Card sx={{ 
                p: 4, 
                borderRadius: 3, 
                border: '1px solid #e5e7eb',
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                transition: 'all .25s ease',
                background: 'linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)',
                '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 16px 30px rgba(0,0,0,0.08)' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 2, mb: 2.5, alignItems: 'start' }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: 2, backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1px #dbeafe' }}>
                      <School sx={{ color: '#2563eb' }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 0.5 }}>Education & Training</Typography>
                      <Typography variant="body1" sx={{ color: '#475569' }}>
                        Improve learning management, administrative processes, and student services.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 800, mb: 1.5 }}>Key Solutions</Typography>
                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                        {['Student enrollment','Course management','Certification tracking','Alumni management'].map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#334155' }}>
                            <TaskAlt sx={{ fontSize: 18, color: '#10b981' }} />
                            <Typography variant="body2">{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 800, mb: 1.5 }}>Results Achieved</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {['80% faster enrollment','60% admin time saved','95% satisfaction rate'].map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#334155' }}>
                            <TrendingUp sx={{ fontSize: 18, color: '#3b82f6' }} />
                            <Typography variant="body2">{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Government & Public Sector */}
            <Grid item xs={12} md={6}>
              <Card sx={{ 
                p: 4, 
                borderRadius: 3, 
                border: '1px solid #e5e7eb',
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                transition: 'all .25s ease',
                background: 'linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)',
                '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 16px 30px rgba(0,0,0,0.08)' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 2, mb: 2.5, alignItems: 'start' }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: 2, backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1px #dbeafe' }}>
                      <Shield sx={{ color: '#2563eb' }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 0.5 }}>Government & Public Sector</Typography>
                      <Typography variant="body1" sx={{ color: '#475569' }}>
                        Improve citizen services, permit processing, and regulatory compliance for government agencies.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 800, mb: 1.5 }}>Key Solutions</Typography>
                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                        {['Permit Processing','Regulatory Compliance','Citizen Services','Public Records'].map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#334155' }}>
                            <TaskAlt sx={{ fontSize: 18, color: '#10b981' }} />
                            <Typography variant="body2">{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 800, mb: 1.5 }}>Results Achieved</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {['70% faster processing','99% transparency','60% cost savings'].map((item, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#334155' }}>
                            <TrendingUp sx={{ fontSize: 18, color: '#3b82f6' }} />
                            <Typography variant="body2">{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Industries CTA (inside section) */}
          <Box sx={{ mt: 6, p: { xs: 3, md: 5 }, borderRadius: 3, background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)', color: 'white', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
              Expertise Across All Major Industries
            </Typography>
            <Typography sx={{ opacity: 0.95, mb: 3, maxWidth: 900, mx: 'auto' }}>
              With deep domain knowledge and proven methodologies, we help organizations in every sector achieve operational excellence through tailored BPM solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap', opacity: 0.95 }}>
              {[ '50+ Industries Served', '1000+ Successful Implementations', '99.9% Client Satisfaction' ].map((text, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.9)' }} />
                  <Typography sx={{ fontWeight: 600 }}>{text}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 12, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="stretch">
            <Grid item xs={12} md={7}>
              <Typography variant="overline" sx={{ color: '#64748b', letterSpacing: '0.08em', fontWeight: 700 }}>
                ABOUT FLOWCORE
              </Typography>
              <Typography variant="h1" component="h2" sx={{ 
                fontWeight: 800, 
                mb: 2,
                fontSize: { xs: '1.875rem', sm: '2.125rem', md: '2.5rem', lg: '2.625rem' },
                lineHeight: 1.1,
                color: '#1e293b',
                letterSpacing: '-0.02em'
              }}>
                Pioneering the Future of Business Process Management
              </Typography>
              <Typography variant="body1" sx={{ color: '#6b7280', mb: 2, maxWidth: 720, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                Founded in 2015, FlowCore has emerged as a leading force in business process management. We specialize in designing and 
                developing sophisticated BPM software solutions that help organizations across various industries streamline their operations, 
                reduce costs, and achieve sustainable growth.
              </Typography>
              <Typography variant="body1" sx={{ color: '#6b7280', mb: 4, maxWidth: 720, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                Our team of experts combines deep industry knowledge with cutting-edge technology to deliver tailored solutions that address the 
                unique challenges of each client. We believe in building long-term partnerships that drive continuous innovation and operational excellence.
              </Typography>

              <Box sx={{ display: 'grid', gap: 2.25 }}>
                {[
                  { icon: <AutoAwesome sx={{ color: '#2563eb' }} />, title: 'Innovation First', desc: 'We continuously push the boundaries of BPM technology to deliver cutting-edge solutions.' },
                  { icon: <Groups sx={{ color: '#2563eb' }} />, title: 'Client Success', desc: 'Your success is our success. We build long-term partnerships focused on your growth.' },
                  { icon: <WorkspacePremium sx={{ color: '#2563eb' }} />, title: 'Quality Excellence', desc: 'Every solution is crafted with meticulous attention to detail and highest quality standards.' },
                  { icon: <Public sx={{ color: '#2563eb' }} />, title: 'Global Impact', desc: 'We help organizations worldwide achieve operational excellence and sustainable growth.' }
                ].map((item, i) => (
                  <Box key={i} sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 2, alignItems: 'start' }}>
                    <Box sx={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: '50%', 
                      background: 'radial-gradient(circle at 30% 30%, #eff6ff 0%, #eaf2ff 60%, #e5edff 100%)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      boxShadow: 'inset 0 0 0 1px #dbeafe'
                    }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#111827', mb: 0.25, fontSize: '1rem' }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.9375rem' }}>{item.desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 3.5, background: 'linear-gradient(180deg, #f9fbff 0%, #f3f7ff 100%)', borderRadius: 3, textAlign: 'center', border: '1px solid #e6eefc',
                    boxShadow: '0 10px 25px rgba(59,130,246,0.08)'
                  }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 1.5 }}>
                      <People sx={{ color: '#2563eb' }} />
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827', fontSize: '1.75rem' }}>500+</Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.9rem' }}>Enterprise Clients</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 3.5, background: 'linear-gradient(180deg, #f9fbff 0%, #f3f7ff 100%)', borderRadius: 3, textAlign: 'center', border: '1px solid #e6eefc',
                    boxShadow: '0 10px 25px rgba(59,130,246,0.08)'
                  }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 1.5 }}>
                      <Language sx={{ color: '#2563eb' }} />
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827', fontSize: '1.75rem' }}>50+</Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.9rem' }}>Countries Served</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 3.5, background: 'linear-gradient(180deg, #f9fbff 0%, #f3f7ff 100%)', borderRadius: 3, textAlign: 'center', border: '1px solid #e6eefc',
                    boxShadow: '0 10px 25px rgba(59,130,246,0.08)'
                  }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 1.5 }}>
                      <AccessTime sx={{ color: '#2563eb' }} />
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827', fontSize: '1.75rem' }}>99.9%</Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.9rem' }}>Uptime SLA</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ p: 3.5, background: 'linear-gradient(180deg, #f9fbff 0%, #f3f7ff 100%)', borderRadius: 3, textAlign: 'center', border: '1px solid #e6eefc',
                    boxShadow: '0 10px 25px rgba(59,130,246,0.08)'
                  }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 2, backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 1.5 }}>
                      <WorkspacePremium sx={{ color: '#2563eb' }} />
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#111827', fontSize: '1.75rem' }}>25+</Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.9rem' }}>Industry Awards</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ 
                    p: { xs: 3, md: 4 }, 
                    borderRadius: 4, 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', 
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow: '0 20px 45px rgba(59,130,246,.25)'
                  }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: { xs: 2, md: 3 }, fontSize: '1.25rem' }}>Our Journey</Typography>
                    <Box sx={{ display: 'grid', gap: { xs: 1.5, md: 2 } }}>
                      {[
                        { year: '2015 - Foundation', note: 'Started with a vision to revolutionize BPM' },
                        { year: '2018 - Global Expansion', note: 'Extended services to 25+ countries' },
                        { year: '2021 - Innovation Leader', note: 'Recognized as top BPM solution provider' },
                        { year: '2024 - Future Ready', note: 'Leading the AI-powered BPM revolution' }
                      ].map((m, i) => (
                        <Box key={i} sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 1.5, alignItems: 'start' }}>
                          <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'white', mt: 0.75 }} />
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.25, fontSize: '1rem' }}>{m.year}</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.9375rem' }}>{m.note}</Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 14, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 1, color: '#0f172a' }}>
              Let's Build Your Success Together
            </Typography>
            <Typography variant="h6" sx={{ color: '#475569', maxWidth: '780px', mx: 'auto' }}>
              Ready to transform your business processes? Get in touch with our experts for a
              personalized consultation and discover how FlowCore can accelerate your growth.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'grid', gap: 2.5 }}>
                {/* Left column heading to match design */}
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f172a' }}>
                  Get In Touch
                </Typography>
                {[
                  { icon: <Mail sx={{ color: '#2563eb' }} />, title: 'Email Us', desc: 'hello@flowcore.com', sub: 'We respond within 24 hours' },
                  { icon: <Phone sx={{ color: '#2563eb' }} />, title: 'Call Us', desc: '+1 (555) 123-4567', sub: 'Mon-Fri 9AM-6PM EST' },
                  { icon: <LocationOn sx={{ color: '#2563eb' }} />, title: 'Visit Us', desc: 'San Francisco, CA', sub: 'Schedule a consultation' },
                  { icon: <HeadsetMic sx={{ color: '#2563eb' }} />, title: 'Support', desc: '24/7 Technical Support', sub: 'For all our clients' }
                ].map((item, i) => (
                  <Box key={i} sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 2, alignItems: 'start', p: 2.25, borderRadius: 2, backgroundColor: 'white', border: '1px solid #e5e7eb' }}>
                    <Box sx={{ width: 40, height: 40, borderRadius: 2, backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 0 1px #dbeafe' }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0f172a' }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#1f2c3b', fontWeight: 600 }}>{item.desc}</Typography>
                      <Typography variant="body2" sx={{ color: '#6b7280' }}>{item.sub}</Typography>
                    </Box>
                  </Box>
                ))}

                <Box sx={{ mt: 1, p: 3, borderRadius: 2.5, backgroundColor: 'white', border: '1px solid #e5e7eb' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0f172a', mb: 1.5 }}>
                    Global Offices
                  </Typography>
                  <Box sx={{ display: 'grid', gap: 1.25 }}>
                    {['San Francisco, CA (HQ)', 'New York, NY', 'London, UK', 'Singapore'].map((city, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.25, color: '#334155' }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#3b82f6' }} />
                        <Typography variant="body2">{city}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, border: '1px solid #e5e7eb', boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#0f172a' }}>
                  Request a Consultation
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Full Name" placeholder="John Doe" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth type="email" label="Email Address" placeholder="john@company.com" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Company Name" placeholder="Your Company" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel id="industry-label">Industry</InputLabel>
                      {/* Controlled Select to show placeholder like the design */}
                      <Select
                        labelId="industry-label"
                        label="Industry"
                        displayEmpty
                        defaultValue=""
                        renderValue={(value: unknown) => {
                          const v = (value as string) || '';
                          return v !== '' ? v : 'Select Industry';
                        }}
                      >
                        {['', 'Financial Services', 'Healthcare', 'Manufacturing', 'Retail', 'Government', 'Education'].map((opt, idx) => (
                          <MenuItem key={idx} value={opt}>{opt === '' ? 'Select Industry' : opt}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Message" multiline rows={5} placeholder="Tell us about your business process challenges and goals..." />
                  </Grid>
                </Grid>
                <FormControlLabel sx={{ mt: 1 }} control={<Checkbox />} label={"I agree to receive updates and newsletters from FlowCore. I can unsubscribe at any time."} />

                <Button 
                  variant="contained" 
                  fullWidth 
                  startIcon={<Box sx={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Mail sx={{ fontSize: 16 }} /></Box>}
                  endIcon={<Send sx={{ fontSize: 18 }} />}
                  sx={{ mt: 2, py: 1.5, backgroundColor: '#2563eb', borderRadius: 2, textTransform: 'none', fontWeight: 700, '&:hover': { backgroundColor: '#1d4ed8' } }}
                >
                  Send Message
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>{/* Footer */}
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
