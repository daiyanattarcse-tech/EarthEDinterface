import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Globe, 
  Users, 
  Target, 
  Trophy, 
  Camera, 
  Zap, 
  BarChart3, 
  Heart, 
  ArrowRight, 
  Menu, 
  X, 
  Play,
  Star,
  Award,
  TrendingUp,
  CheckCircle,
  MessageCircle,
  Share2,
  BookOpen,
  Lightbulb,
  TreePine,
  Droplets,
  Wind,
  Recycle
} from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { id: 'home', label: 'Home', icon: <Globe className="w-4 h-4" /> },
    { id: 'about', label: 'About Us', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'features', label: 'Features', icon: <Target className="w-4 h-4" /> },
    { id: 'community', label: 'Community', icon: <Users className="w-4 h-4" /> },
    { id: 'impact', label: 'Impact', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'join', label: 'Get Involved', icon: <Heart className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <MessageCircle className="w-4 h-4" /> },
  ];

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Header Component
  const Header = () => (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-full">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              EarthEd
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  currentSection === item.id
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-green-50 hover:text-green-600"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );

  // Home Section
  const HomeSection = () => (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Gamify Sustainability.
                </span>
                <br />
                <span className="text-gray-800">Empower the Future.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform environmental education through interactive missions, social challenges, and real-world impact tracking. 
                Join thousands of students worldwide making sustainability fun, engaging, and actionable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('join')}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Join EarthEd Today
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </button>
                
                <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Missions</h3>
                <p className="text-sm text-gray-600">Interactive challenges</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Snaps</h3>
                <p className="text-sm text-gray-600">Photo evidence</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Streaks</h3>
                <p className="text-sm text-gray-600">Daily motivation</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800">Impact</h3>
                <p className="text-sm text-gray-600">Track progress</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Maya's Mission</h4>
                      <p className="text-sm text-gray-500">Tree Spotter Challenge</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">247</span>
                  </div>
                </div>

                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <TreePine className="w-16 h-16 text-green-600" />
                </div>

                <div className="space-y-3">
                  <p className="text-gray-700">
                    "Just completed my 10-minute walk and spotted this amazing oak tree! 
                    Did you know a mature oak can absorb 48 pounds of CO₂ per year?"
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-red-500">
                        <Heart className="w-4 h-4" />
                        <span>23</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-500">
                        <MessageCircle className="w-4 h-4" />
                        <span>5</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-green-500">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                    <span>2 minutes ago</span>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-800">Streak Progress</span>
                    <span className="text-sm text-green-600">Day 15/30</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Join the Global Movement
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">1.2M</div>
              <p className="text-gray-600">Missions Completed</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
              <p className="text-gray-600">Behavior Change Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // About Section
  const AboutSection = () => (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              The Problem with Traditional Eco-Education
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Environmental education has remained stuck in the past—boring textbooks, 
              theoretical concepts, and disconnected from real-world action. Students learn about climate change 
              but don't know how to make a meaningful impact in their daily lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600">Traditional Approach Problems:</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Passive learning with no practical application</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Abstract concepts that feel overwhelming</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">No social motivation or peer engagement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Disconnected from daily habits and behaviors</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-10 h-10 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">The Result?</h4>
                <p className="text-gray-600">
                  Students graduate knowing climate facts but lacking the motivation, 
                  tools, and community support to create lasting environmental change in their lives.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl mb-16">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Introducing EarthEd's Solution</h3>
              <p className="text-xl opacity-90 leading-relaxed">
                We've reimagined environmental education as an interactive, social, and action-oriented experience 
                that transforms knowledge into lasting behavior change through the power of gamification.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Mission-Based Learning</h4>
                <p className="text-gray-600">
                  Instead of reading about sustainability, students complete real-world missions like 
                  "Walk 10 minutes and photograph a tree" or "Switch to a reusable water bottle for one week."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-600">EarthEd's Approach:</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Interactive missions with immediate real-world impact</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Social sharing and community encouragement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Streak tracking for habit formation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Data-driven impact visualization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Example Mission in Action</h3>
              <p className="text-gray-600">Here's how a simple 10-minute mission transforms learning:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Mission Assignment</h4>
                <p className="text-sm text-gray-600">
                  "Take a 10-minute walk in your neighborhood and snap a photo of the most interesting tree you find."
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Action & Discovery</h4>
                <p className="text-sm text-gray-600">
                  Student walks, discovers a 200-year-old oak tree, learns it absorbs 48 lbs of CO₂ annually.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Share & Connect</h4>
                <p className="text-sm text-gray-600">
                  Shares photo with the community, earns streak points, inspires others to explore nature.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision: A Generation of Environmental Leaders
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We believe that when environmental education becomes interactive, social, and personally meaningful, 
              students don't just learn about sustainability—they become passionate advocates who create lasting change 
              in their communities and beyond. EarthEd is building the largest network of young environmental leaders 
              in the world, one mission at a time.
            </p>
            <button 
              onClick={() => scrollToSection('features')}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300"
            >
              Explore Our Features
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // Features Section
  const FeaturesSection = () => {
    const features = [
      {
        icon: <Target className="w-8 h-8" />,
        title: "Gamified Missions",
        description: "Transform learning into engaging quests with real-world challenges that build sustainable habits progressively.",
        color: "green",
        details: [
          "Daily micro-challenges (5-15 minutes)",
          "Progressive difficulty levels",
          "Real-world environmental impact",
          "Instant feedback and rewards"
        ],
        example: "Mission: 'Plastic Detective' - Identify 5 single-use plastics in your home and find sustainable alternatives."
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Streak Scores",
        description: "Build lasting habits through streak tracking that motivates consistent daily environmental actions.",
        color: "orange",
        details: [
          "Daily streak tracking",
          "Milestone celebrations",
          "Habit formation psychology",
          "Recovery streak system"
        ],
        example: "Maria's 47-day reusable bottle streak has saved 141 plastic bottles and inspired 23 classmates to join."
      },
      {
        icon: <Camera className="w-8 h-8" />,
        title: "Impact Snaps",
        description: "Document your environmental actions with photos that create a visual portfolio of positive impact.",
        color: "blue",
        details: [
          "Photo evidence system",
          "Before/after comparisons",
          "Automatic impact calculations",
          "Visual progress tracking"
        ],
        example: "Students share 'Snap' photos of their bike commutes, contributing to a collective 2,340 miles of car-free transport."
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "Community Wall",
        description: "Connect with peers worldwide, share achievements, and build a supportive network of environmental champions.",
        color: "purple",
        details: [
          "Global peer network",
          "Achievement sharing",
          "Collaborative challenges",
          "Mentorship opportunities"
        ],
        example: "Global 'Zero Waste Week' challenge connected 12,000 students across 45 countries, sharing creative waste reduction tips."
      },
      {
        icon: <Trophy className="w-8 h-8" />,
        title: "Competitions",
        description: "Participate in school, city, and global competitions that amplify environmental impact through friendly rivalry.",
        color: "yellow",
        details: [
          "School vs school challenges",
          "Individual leaderboards",
          "Team-based missions",
          "Seasonal competitions"
        ],
        example: "The 'Green Schools Challenge' saw 200 schools compete to reduce energy usage, achieving 30% average reduction."
      },
      {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Impact Analytics",
        description: "Track your personal and collective environmental impact with detailed analytics and meaningful metrics.",
        color: "emerald",
        details: [
          "Personal impact dashboard",
          "CO₂ offset calculations",
          "Waste reduction metrics",
          "Behavior change tracking"
        ],
        example: "Platform users have collectively offset 450 tons of CO₂, equivalent to planting 20,000 trees."
      }
    ];

    return (
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Revolutionary Features for Environmental Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how EarthEd transforms traditional environmental learning into an engaging, 
              social, and impactful experience through innovative gamification features.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6 text-${feature.color}-600`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-3 mb-6">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className={`w-4 h-4 text-${feature.color}-500 flex-shrink-0`} />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className={`bg-${feature.color}-50 p-4 rounded-lg border-l-4 border-${feature.color}-400`}>
                  <p className="text-sm text-gray-700 italic">
                    <strong>Real Example:</strong> {feature.example}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">See Features in Action</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Experience how these features work together to create lasting environmental behavior change. 
              Join thousands of students already making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://blank-duplicated-2mro.bolt.host/missions', '_blank')}
                className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your First Mission
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-colors">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Community Section
  const CommunitySection = () => {
    const communityPosts = [
      {
        user: "Alex Chen",
        avatar: "AC",
        time: "2 hours ago",
        mission: "Zero Waste Lunch Challenge",
        content: "Day 12 of bringing zero-waste lunches! Today's creation: quinoa salad in my glass container. The cafeteria staff asked about my setup and now 3 more students want to try zero-waste lunches!",
        image: "🥗",
        likes: 34,
        comments: 8,
        shares: 5,
        streak: 12,
        impact: "24 disposable containers saved"
      },
      {
        user: "Maya Patel",
        avatar: "MP",
        time: "5 hours ago",
        mission: "Urban Tree Mapper",
        content: "Found this incredible 150-year-old maple tree just 2 blocks from school! According to my research, it absorbs about 40 pounds of CO₂ annually. Adding it to our community tree map - we're up to 47 trees documented!",
        image: "🌳",
        likes: 67,
        comments: 15,
        shares: 12,
        streak: 23,
        impact: "47 trees mapped"
      },
      {
        user: "Jordan Williams",
        avatar: "JW",
        time: "1 day ago",
        mission: "Bike to School Week",
        content: "Completed my first full week biking to school! 15 miles total, saved 4.2 lbs of CO₂, and discovered 2 new shortcuts. My legs are tired but I feel amazing. Who's joining me next week?",
        image: "🚲",
        likes: 89,
        comments: 22,
        shares: 18,
        streak: 7,
        impact: "4.2 lbs CO₂ saved"
      }
    ];

    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "High School Student",
        school: "Green Valley High",
        quote: "EarthEd completely changed how I think about the environment. I used to feel overwhelmed by climate change, but now I take action every day. My 45-day reusable bottle streak has inspired my whole friend group!",
        impact: "Inspired 8 friends to start sustainability habits"
      },
      {
        name: "Dr. Michael Rodriguez",
        role: "Environmental Science Teacher",
        school: "Lincoln Academy",
        quote: "My students are more engaged in environmental topics than ever before. EarthEd bridges the gap between knowledge and action. I've seen shy students become environmental leaders in their families and communities.",
        impact: "98% student participation in eco-missions"
      },
      {
        name: "Emma Thompson",
        role: "University Student",
        school: "State University",
        quote: "Starting EarthEd in high school shaped my college major choice. The community support and real impact tracking showed me that individual actions matter. Now I'm studying environmental engineering to scale these solutions.",
        impact: "Career path influenced by EarthEd experience"
      }
    ];

    return (
      <section id="community" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Join a Thriving Global Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with thousands of passionate students worldwide who are turning environmental education 
              into action. Share your progress, get inspired, and build lasting friendships around shared values.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Community Feed</h3>
              <div className="space-y-6">
                {communityPosts.map((post, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {post.avatar}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-800">{post.user}</h4>
                            <p className="text-sm text-gray-500">{post.mission} • {post.time}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="bg-orange-100 px-3 py-1 rounded-full">
                              <span className="text-sm font-medium text-orange-600">
                                🔥 {post.streak} day streak
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>

                        <div className="text-6xl mb-4 text-center p-4 bg-white rounded-lg">
                          {post.image}
                        </div>

                        <div className="bg-green-50 p-3 rounded-lg mb-4">
                          <div className="flex items-center space-x-2">
                            <BarChart3 className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-800">Environmental Impact:</span>
                            <span className="text-sm text-green-600">{post.impact}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-gray-500">
                          <div className="flex items-center space-x-6">
                            <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                              <Heart className="w-5 h-5" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                              <MessageCircle className="w-5 h-5" />
                              <span>{post.comments}</span>
                            </button>
                            <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                              <Share2 className="w-5 h-5" />
                              <span>{post.shares}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Community Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Active Users Today</span>
                    <span className="font-bold text-green-600">12,847</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Missions Completed</span>
                    <span className="font-bold text-blue-600">1.2M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">CO₂ Offset (lbs)</span>
                    <span className="font-bold text-orange-600">450K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Countries</span>
                    <span className="font-bold text-purple-600">67</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Challenges</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <span className="font-medium text-gray-800">Water Warrior</span>
                    </div>
                    <p className="text-sm text-gray-600">Use a reusable water bottle all day</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Wind className="w-4 h-4 text-green-500" />
                      <span className="font-medium text-gray-800">Fresh Air Explorer</span>
                    </div>
                    <p className="text-sm text-gray-600">Walk or bike instead of driving</p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Recycle className="w-4 h-4 text-orange-500" />
                      <span className="font-medium text-gray-800">Recycle Hero</span>
                    </div>
                    <p className="text-sm text-gray-600">Properly sort 5 recyclable items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Real Impact Stories</h3>
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white mb-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">The Metal Bottle Revolution</h4>
                <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                  What started as a simple "Reusable Bottle Week" challenge at Roosevelt High School 
                  became a school-wide movement. Within one month, 847 students switched to reusable bottles, 
                  eliminating over 12,000 plastic bottles from their weekly consumption. The movement spread 
                  to 5 neighboring schools and caught the attention of the local government, which installed 
                  12 new water fountains across the district.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">847</div>
                  <p className="opacity-90">Students Engaged</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">12K</div>
                  <p className="opacity-90">Plastic Bottles Saved</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5</div>
                  <p className="opacity-90">Schools Inspired</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">What Our Community Says</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.school}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Impact:</span>
                    </div>
                    <p className="text-sm text-green-600 mt-1">{testimonial.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Become part of a global network of young environmental leaders making real impact. 
              Share your journey, inspire others, and create lasting change together.
            </p>
            <button 
              onClick={() => scrollToSection('join')}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300"
            >
              Join EarthEd Community
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
          </div>
        </div>
      </section>
    );
  };

  // Impact Section
  const ImpactSection = () => {
    return (
      <section id="impact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Measuring Real Environmental Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              EarthEd doesn't just teach about sustainability—we track and measure real environmental outcomes. 
              See how our platform creates tangible positive change across students, activists, institutions, and our planet.
            </p>
          </div>

          {/* Students Impact */}
          <div className="mb-20">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Student Impact Dashboard</h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-6">Behavior Change Metrics</h4>
                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-semibold text-green-800">Sustainable Habits Formed</span>
                        <span className="text-2xl font-bold text-green-600">87%</span>
                      </div>
                      <p className="text-green-700">Students maintain eco-habits 90+ days after starting</p>
                      <div className="w-full bg-green-200 rounded-full h-3 mt-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: '87%' }}></div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-semibold text-blue-800">Active Daily Users</span>
                        <span className="text-2xl font-bold text-blue-600">52,847</span>
                      </div>
                      <p className="text-blue-700">Students completing daily eco-missions</p>
                      <div className="flex items-center space-x-2 mt-3">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-blue-600">+23% this month</span>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-semibold text-orange-800">Average Streak Length</span>
                        <span className="text-2xl font-bold text-orange-600">34 days</span>
                      </div>
                      <p className="text-orange-700">Consecutive days of environmental actions</p>
                      <div className="flex items-center space-x-2 mt-3">
                        <Zap className="w-4 h-4 text-orange-600" />
                        <span className="text-sm text-orange-600">Longest streak: 127 days</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-6">Individual Success Stories</h4>
                  <div className="space-y-6">
                    <div className="border border-green-200 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="font-bold text-green-600">AJ</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Aria Johnson, Age 16</h5>
                          <p className="text-sm text-gray-500 mb-3">Lincoln High School, California</p>
                          <p className="text-gray-700 mb-3">
                            "Started with simple reusable bottle missions. 8 months later, I've eliminated 
                            single-use plastics, started composting, and convinced my family to go vegetarian 
                            two days a week."
                          </p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-green-600">285</span>
                              <span className="text-gray-600"> missions completed</span>
                            </div>
                            <div>
                              <span className="font-medium text-blue-600">89</span>
                              <span className="text-gray-600"> day streak</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-blue-200 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="font-bold text-blue-600">MR</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Marcus Rodriguez, Age 14</h5>
                          <p className="text-sm text-gray-500 mb-3">Roosevelt Middle School, Texas</p>
                          <p className="text-gray-700 mb-3">
                            "EarthEd helped me discover my passion for urban gardening. I've now started 
                            a school garden club and we've grown 400 pounds of vegetables for our cafeteria."
                          </p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-green-600">156</span>
                              <span className="text-gray-600"> missions completed</span>
                            </div>
                            <div>
                              <span className="font-medium text-orange-600">23</span>
                              <span className="text-gray-600"> students inspired</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activists Impact */}
          <div className="mb-20">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Activist Network Impact</h3>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Community Organizers</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-1">2,847</div>
                      <p className="text-gray-600">Student leaders trained</p>
                    </div>
                    <p className="text-gray-700 text-sm">
                      EarthEd has identified and developed young environmental leaders who organize 
                      local initiatives, from beach cleanups to school policy changes.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Policy Advocates</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">47</div>
                      <p className="text-gray-600">Policy changes influenced</p>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Students using EarthEd data and experience to advocate for environmental 
                      policies in their schools, cities, and states.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Event Organizers</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">1,234</div>
                      <p className="text-gray-600">Environmental events hosted</p>
                    </div>
                    <p className="text-gray-700 text-sm">
                      From Earth Day celebrations to sustainability fairs, EarthEd users organize 
                      impactful community events reaching thousands.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-xl text-white">
                <h4 className="text-xl font-bold mb-3">Spotlight: Youth Climate Summit 2024</h4>
                <p className="leading-relaxed">
                  EarthEd users organized and led a three-day Youth Climate Summit, bringing together 
                  500 students from 23 schools. The event resulted in commitments to reduce school 
                  energy consumption by 25% and established ongoing regional collaboration networks. 
                  The organizing committee consisted entirely of students who met through EarthEd missions.
                </p>
              </div>
            </div>
          </div>

          {/* Institutions Impact */}
          <div className="mb-20">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Institutional Transformation</h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-6">School Partnerships</h4>
                  <div className="space-y-6">
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h5 className="font-bold text-gray-800 mb-2">Green Valley High School District</h5>
                      <p className="text-gray-600 mb-3">
                        Implemented EarthEd across 12 schools with 8,500 students. Results after one year:
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 40% reduction in cafeteria food waste</li>
                        <li>• 89% of students adopted reusable water bottles</li>
                        <li>• $47,000 annual savings on cleaning supplies</li>
                        <li>• 15% reduction in school bus usage</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-6">
                      <h5 className="font-bold text-gray-800 mb-2">University of California System</h5>
                      <p className="text-gray-600 mb-3">
                        Pilot program across 3 UC campuses with 15,000 students participating:
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 23% increase in sustainable transportation</li>
                        <li>• 67% reduction in single-use items at dining halls</li>
                        <li>• 156 student-led sustainability projects launched</li>
                        <li>• $2.3M in sustainability-focused research funding</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-6">Corporate Engagement</h4>
                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h5 className="font-bold text-green-800 mb-2">Fortune 500 Partnerships</h5>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">23</div>
                          <p className="text-sm text-green-700">Corporate partners</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">$4.7M</div>
                          <p className="text-sm text-green-700">Funding provided</p>
                        </div>
                      </div>
                      <p className="text-sm text-green-700">
                        Major corporations sponsor EarthEd missions and provide real-world 
                        internships for top-performing students.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h5 className="font-bold text-blue-800 mb-2">Government Collaboration</h5>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">8</div>
                          <p className="text-sm text-blue-700">City partnerships</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">3</div>
                          <p className="text-sm text-blue-700">State programs</p>
                        </div>
                      </div>
                      <p className="text-sm text-blue-700">
                        Local and state governments use EarthEd data to inform environmental 
                        policies and track community sustainability goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Planet Impact */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-4">Global Environmental Impact</h3>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  Every mission completed on EarthEd contributes to measurable environmental outcomes. 
                  Here's our collective impact on the planet.
                </p>
              </div>

              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">2.4M</div>
                  <p className="opacity-90 mb-1">Plastic bottles eliminated</p>
                  <p className="text-sm opacity-75">Equivalent to 48 tons of plastic waste</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wind className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">890K</div>
                  <p className="opacity-90 mb-1">Pounds of CO₂ offset</p>
                  <p className="text-sm opacity-75">Equal to planting 40,000 trees</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Recycle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">156K</div>
                  <p className="opacity-90 mb-1">Pounds of waste diverted</p>
                  <p className="text-sm opacity-75">From landfills to proper recycling</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TreePine className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">78K</div>
                  <p className="opacity-90 mb-1">Trees planted or preserved</p>
                  <p className="text-sm opacity-75">Through direct action and donations</p>
                </div>
              </div>

              <div className="mt-12 bg-white/10 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-center mb-6">Real-Time Impact Tracking</h4>
                <p className="text-center opacity-90 mb-8 max-w-2xl mx-auto">
                  Every action on EarthEd is converted into environmental metrics using peer-reviewed 
                  calculations. Students see exactly how their individual actions contribute to global change.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold mb-1">Live Dashboard</div>
                    <p className="text-sm opacity-75">Real-time impact updates</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold mb-1">Scientific Backing</div>
                    <p className="text-sm opacity-75">Verified calculation methods</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold mb-1">Transparency</div>
                    <p className="text-sm opacity-75">Open impact methodology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Make Your Impact?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students worldwide who are creating measurable environmental change. 
              Every action counts, every mission matters, every student makes a difference.
            </p>
            <button 
              onClick={() => scrollToSection('join')}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300"
            >
              Start Making Impact Today
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
          </div>
        </div>
      </section>
    );
  };

  // Get Involved Section
  const GetInvolvedSection = () => {
    const audiences = [
      {
        icon: <Users className="w-12 h-12" />,
        title: "Students",
        subtitle: "Ages 12-22",
        description: "Join the global movement of young environmental leaders. Complete missions, build streaks, and create lasting change in your daily life.",
        benefits: [
          "Access to 200+ interactive eco-missions",
          "Connect with peers worldwide",
          "Track your personal environmental impact",
          "Earn recognition and build your portfolio",
          "Develop leadership skills"
        ],
        cta: "Start Your First Mission",
        color: "green"
      },
      {
        icon: <BookOpen className="w-12 h-12" />,
        title: "Educators",
        subtitle: "Teachers & Professors",
        description: "Transform your environmental curriculum with engaging, data-driven tools that inspire student action beyond the classroom.",
        benefits: [
          "Ready-to-use lesson plans and activities",
          "Real-time student progress tracking",
          "Curriculum aligned with education standards",
          "Professional development resources",
          "Community of innovative educators"
        ],
        cta: "Get Educator Access",
        color: "blue"
      },
      {
        icon: <Heart className="w-12 h-12" />,
        title: "Activists",
        subtitle: "Environmental Advocates",
        description: "Amplify your impact by engaging with the next generation of environmental leaders. Mentor students and share your expertise.",
        benefits: [
          "Mentor young environmental leaders",
          "Share expertise through guest missions",
          "Access youth engagement insights",
          "Collaborate on local initiatives",
          "Expand your advocacy network"
        ],
        cta: "Become a Mentor",
        color: "orange"
      },
      {
        icon: <Award className="w-12 h-12" />,
        title: "Institutions",
        subtitle: "Schools & Organizations",
        description: "Implement comprehensive sustainability education programs that create measurable behavior change across your institution.",
        benefits: [
          "Institution-wide dashboard and analytics",
          "Customizable missions for your context",
          "Staff training and support",
          "Impact reporting for stakeholders",
          "Integration with existing systems"
        ],
        cta: "Request Institutional Access",
        color: "purple"
      }
    ];

    return (
      <section id="join" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Get Involved with EarthEd
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're a student ready to make a difference, an educator looking to inspire, 
              an activist seeking to engage youth, or an institution committed to sustainability, 
              EarthEd has a place for you in the environmental education revolution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {audiences.map((audience, index) => (
              <div key={index} className={`bg-gradient-to-br from-${audience.color}-50 to-${audience.color}-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-start space-x-6">
                  <div className={`text-${audience.color}-600 flex-shrink-0`}>
                    {audience.icon}
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{audience.title}</h3>
                      <p className={`text-${audience.color}-700 font-medium`}>{audience.subtitle}</p>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{audience.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-800 mb-3">What You Get:</h4>
                      <ul className="space-y-2">
                        {audience.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className={`w-5 h-5 text-${audience.color}-600 flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className={`bg-gradient-to-r from-${audience.color}-500 to-${audience.color}-600 text-white px-6 py-3 rounded-full font-semibold hover:from-${audience.color}-600 hover:to-${audience.color}-700 transition-all duration-300 w-full`}>
                      {audience.cta}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-12 text-white text-center mb-16">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Environmental Education?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join over 50,000 students, 2,000 educators, and 500 institutions already using EarthEd 
              to create real environmental change. The planet needs action, and action starts with education.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">50K+</div>
                <p className="opacity-90">Active Students</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2K+</div>
                <p className="opacity-90">Engaged Educators</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <p className="opacity-90">Partner Institutions</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Join EarthEd Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Get Started in 3 Simple Steps
              </h3>
              <p className="text-lg text-gray-600">
                Joining EarthEd is quick and easy. Start making environmental impact today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-green-600">1</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Sign Up</h4>
                <p className="text-gray-600">
                  Create your free EarthEd account in under 2 minutes. Choose your role and set your environmental goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Complete Your First Mission</h4>
                <p className="text-gray-600">
                  Choose from beginner-friendly missions like "Reusable Bottle Day" or "10-Minute Nature Walk" to get started.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-orange-600">3</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Share & Connect</h4>
                <p className="text-gray-600">
                  Share your progress with the community, find mission partners, and start building your environmental impact.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Questions About Getting Started?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our team is here to help you maximize your EarthEd experience. Contact us for personalized guidance.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
          </div>
        </div>
      </section>
    );
  };

  // Contact Section
  const ContactSection = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      role: '',
      message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We\'ll get back to you soon.');
    };

    const resources = [
      {
        title: "MIT Solve Challenge",
        description: "Learn about our recognition as a MIT Solve finalist for innovative education solutions",
        link: "#"
      },
      {
        title: "Research & Studies",
        description: "Access peer-reviewed research on gamification in environmental education",
        link: "#"
      },
      {
        title: "Media Kit",
        description: "Download logos, graphics, and information about EarthEd for media use",
        link: "#"
      },
      {
        title: "API Documentation",
        description: "Integrate EarthEd with your systems using our comprehensive API",
        link: "#"
      }
    ];

    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about EarthEd? Want to partner with us? Need support getting started? 
              We're here to help you join the environmental education revolution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    I am a... *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher/Educator</option>
                    <option value="activist">Environmental Activist</option>
                    <option value="institution">Institution Representative</option>
                    <option value="parent">Parent</option>
                    <option value="researcher">Researcher</option>
                    <option value="media">Media/Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                    placeholder="Tell us how we can help you or share your thoughts about EarthEd..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email Support</h4>
                      <p className="text-gray-600">support@earthed.org</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Community Forum</h4>
                      <p className="text-gray-600">Join thousands of users discussing missions</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Help Center</h4>
                      <p className="text-gray-600">Find answers to common questions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Useful Resources</h3>
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-gray-800 mb-2">{resource.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                      <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                        Learn More →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
<div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Partner With Us</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Interested in institutional partnerships, research collaborations, or sponsorship opportunities? 
                  We'd love to explore how we can work together to advance environmental education.
                </p>
                <button className="text-green-600 hover:text-green-700 font-medium">
                  Partnership Inquiries →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 bg-gray-800 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-full">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">EarthEd</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Transforming environmental education through gamification, community, and real-world impact. 
                  Join the movement toward a more sustainable future.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">Platform</h4>
                <ul className="space-y-3">
                  <li><button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors">Features</button></li>
                  <li><button onClick={() => scrollToSection('community')} className="text-gray-300 hover:text-white transition-colors">Community</button></li>
                  <li><button onClick={() => scrollToSection('impact')} className="text-gray-300 hover:text-white transition-colors">Impact</button></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">Resources</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Research</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Webinars</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">Connect</h4>
                <div className="flex space-x-4 mb-6">
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <Share2 className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <Users className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <Camera className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-300 text-sm">
                  Follow us for updates, mission ideas, and environmental education insights.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 mt-8 text-center">
              <p className="text-gray-300">
                © 2025 EarthEd. All rights reserved. | 
                <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
                <a href="#" className="hover:text-white transition-colors ml-1">Terms of Service</a> | 
                <a href="#" className="hover:text-white transition-colors ml-1">MIT Solve Challenge Finalist</a>
              </p>
            </div>
          </div>
        </footer>
      </section>
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HomeSection />
      <AboutSection />
      <FeaturesSection />
      <CommunitySection />
      <ImpactSection />
      <GetInvolvedSection />
      <ContactSection />
    </div>
  );
}

export default App;