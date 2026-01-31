export const projects = [
  {
    id: 1,
    title: 'POS System',
    description:
      'A comprehensive point-of-sale system with inventory management, sales tracking, and reporting features built with React and Node.js.',
    image: '/projects/pos-system.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: 'https://github.com/Chamara-Dilshan/pos-system',
    features: [
      'Real-time inventory tracking and management.',
      'Sales analytics and reporting dashboard.',
      'User authentication and role-based access.',
      'Receipt generation and printing support.',
    ],
  },
  {
    id: 2,
    title: 'Car Rental Platform',
    description:
      'A full-featured car rental application allowing users to browse, book, and manage vehicle rentals with an intuitive interface.',
    image: '/projects/car-rental.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: 'https://github.com/Chamara-Dilshan/car-rental',
    features: [
      'Vehicle search with filters and availability.',
      'Online booking and reservation system.',
      'User dashboard for managing rentals.',
      'Admin panel for fleet management.',
    ],
  },
  {
    id: 4,
    title: 'Hotel Booking System',
    description:
      'A hotel booking application that allows users to search for hotels, view room availability, and make reservations online.',
    image: '/projects/hotel-booking.png',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Bootstrap'],
    liveUrl: null,
    githubUrl: 'https://github.com/Chamara-Dilshan/hotel-booking-system',
    features: [
      'Hotel search with location and date filters.',
      'Room availability and pricing display.',
      'Secure booking system with Stripe payment integration.',
      'Role-based access (Customer, Hotel Manager, Admin).',
      'User reviews and ratings.',
    ],
  },
  {
    id: 3,
    title: 'E-Commerce Store',
    description:
      'A scalable e-commerce platform built with microservices architecture, featuring independent services for user, product, and order management with Keycloak authentication and service discovery.',
    image: '/projects/e-commerce.png',
    tech: ['React', 'Node.js', 'Express', 'Spring Boot', 'MySQL', 'MongoDB', 'Spring Cloud', 'Eureka', 'Gateway', 'Keycloak'],
    liveUrl: null,  
    githubUrl: 'https://github.com/Chamara-Dilshan',
    features: [
      'Microservices architecture with Eureka service discovery.',
      'Centralized authentication with Keycloak SSO.',
      'Separate admin panel and customer-facing application.',
      'API Gateway for unified routing and load balancing.',
    ],
  },
  {
    id: 5,
    title: 'Plant Disease Recognition System',
    description:
      'An AI-powered web application that identifies plant diseases from leaf images with real-time analysis across 38 disease classes for 14 crop types built with TensorFlow and Streamlit.',
    image: '/projects/plant-disease.png',
    tech: ['Python', 'TensorFlow', 'Streamlit', 'TensorFlow Lite', 'NumPy', 'CNN'],
    liveUrl: null,
    githubUrl: 'https://github.com/Chamara-Dilshan/plant-disease-recognition-system',
    features: [
      'Real-time disease detection with confidence scoring.',
      'Multi-class classification across 38 plant diseases and 14 crop types.',
      'Top-3 predictions with visual progress indicators.',
      'Optimized 7.6MB TFLite model for deployment.',
      'Modern responsive UI with interactive results display.',
    ],
  },
]
