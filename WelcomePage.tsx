import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Users, CreditCard, Home, Smartphone, Shield, TrendingUp, Mail, Bell, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate email subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 flex justify-between items-center max-w-[120rem] mx-auto">
        <div className="font-heading text-xl font-bold text-deep-black">
          RENTVYNE
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/contact" className="font-paragraph text-sm text-deep-black hover:text-secondary transition-colors">
            CONTACT
          </Link>
        </div>
      </nav>
      {/* Coming Soon Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        {/* Left side - Bold Typography */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block bg-primary px-4 py-2 rounded-lg mb-4">
              <span className="font-paragraph text-sm text-primary-foreground font-semibold">
                COMING SOON
              </span>
            </div>
            <h1 className="font-heading font-black text-secondary text-3xl lg:text-6xl">
              MODERN
              <br />
              PROPERTY
              <br />
              MANAGEMENT
            </h1>
            <div className="w-16 h-1 bg-primary"></div>
          </div>
          
          <div className="space-y-6">
            <p className="font-heading text-lg text-deep-black font-semibold">
              Smart Rent. Simple Living.
            </p>
            <p className="font-paragraph text-base text-deep-black max-w-md leading-relaxed">
              The ultimate platform for landlords and shortlet owners is launching soon. Get ready to revolutionize your property management experience.
            </p>
          </div>

          {/* Email Notification Form */}
          <div className="space-y-4">
            {isSubscribed ? (
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-paragraph text-sm text-green-700">
                  Thanks! We'll notify you when we launch.
                </span>
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email for early access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 border-gray-300 focus:border-secondary"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-secondary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Bell className="mr-2 h-4 w-4" />
                      Notify Me
                    </>
                  )}
                </Button>
              </form>
            )}
            <p className="font-paragraph text-xs text-gray-600">
              Be the first to know when Rentvyne launches. No spam, just updates.
            </p>
          </div>
        </div>

        {/* Right side - Large Image Block */}
        <div className="relative">
          <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="https://static.wixstatic.com/media/d166c4_d4d4a25fa89d4d60b1b525c42a122b82~mv2.png?originWidth=576&originHeight=448"
              alt="Modern apartment interior showcasing property management excellence"
              className="w-full h-full object-cover"
              width={600}
            />
          </div>
          {/* Accent elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"></div>
          
          {/* Coming Soon Badge */}
          <div className="absolute top-4 left-4 bg-deep-black text-background px-3 py-1 rounded-lg">
            <span className="font-paragraph text-xs font-semibold">{"LAUNCHING 2025"}</span>
          </div>
        </div>
      </section>
      {/* Coming Soon Features Section */}
      <section className="w-full bg-primary py-20">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-black text-primary-foreground mb-6">
              What's Coming
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground max-w-2xl mx-auto">
              Powerful features designed for modern landlords and shortlet owners who demand efficiency and simplicity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading text-xl font-bold text-deep-black mb-4">
                  Tenant Management
                </h3>
                <Users className="h-12 w-12 text-secondary mx-auto mb-6" />
                <p className="font-paragraph text-base text-deep-black mb-6">
                  Organize tenant information, lease agreements, and communication in one centralized platform.
                </p>
                <div className="inline-block bg-gray-100 px-3 py-1 rounded-full">
                  <span className="font-paragraph text-xs text-gray-600">Coming Soon</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <CreditCard className="h-12 w-12 text-secondary mx-auto mb-6" />
                <h3 className="font-heading text-xl font-bold text-deep-black mb-4">
                  Rent Tracking
                </h3>
                <p className="font-paragraph text-base text-deep-black mb-6">
                  Monitor payment schedules, track due dates, and maintain comprehensive payment histories.
                </p>
                <div className="inline-block bg-gray-100 px-3 py-1 rounded-full">
                  <span className="font-paragraph text-xs text-gray-600">Coming Soon</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Home className="h-12 w-12 text-secondary mx-auto mb-6" />
                <h3 className="font-heading text-xl font-bold text-deep-black mb-4">
                  Shortlet Management
                </h3>
                <p className="font-paragraph text-base text-deep-black mb-6">
                  Manage short-term bookings, guest information, and availability with streamlined workflows.
                </p>
                <div className="inline-block bg-gray-100 px-3 py-1 rounded-full">
                  <span className="font-paragraph text-xs text-gray-600">Coming Soon</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Why Choose Rentvyne Section */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-heading text-4xl lg:text-5xl font-black text-deep-black">
                Why Choose
                <span className="text-secondary"> Rentvyne</span>?
              </h2>
              <p className="font-paragraph text-lg text-deep-black leading-relaxed">
                We're building the most comprehensive property management platform that combines powerful features with intuitive design, specifically crafted for landlords and shortlet owners.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-deep-black mb-2">Mobile-First Design</h3>
                    <p className="font-paragraph text-base text-deep-black">Manage your properties on-the-go with our mobile-optimized platform.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-deep-black mb-2">Bank-Level Security</h3>
                    <p className="font-paragraph text-base text-deep-black">Your data and tenant information protected with enterprise-grade security.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-deep-black mb-2">Smart Analytics</h3>
                    <p className="font-paragraph text-base text-deep-black">Make data-driven decisions with comprehensive insights and reporting.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-secondary rounded-lg p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <Smartphone className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-secondary-foreground">
                    All-in-One Platform
                  </h3>
                  <p className="font-paragraph text-base text-secondary-foreground">
                    Everything you need in one powerful, intuitive interface.
                  </p>
                  <div className="inline-block bg-deep-black text-background px-4 py-2 rounded-lg">
                    <span className="font-paragraph text-sm font-semibold">LAUNCHING SOON</span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-accent-orange rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Launch Timeline Section */}
      {/* Early Access CTA Section */}
      <section className="w-full bg-deep-black py-20">
        <div className="max-w-[120rem] mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl lg:text-5xl font-black text-background mb-6">
            Get Early Access to
            <span className="text-primary"> Rentvyne</span>
          </h2>
          <p className="font-paragraph text-lg text-background mb-8 max-w-2xl mx-auto">
            Join our exclusive waitlist and be among the first to experience the future of property management. Limited beta spots available.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="font-heading text-3xl font-black text-primary mb-2">500+</div>
              <div className="font-paragraph text-sm text-background">Early Subscribers</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl font-black text-primary mb-2">Q1 2024</div>
              <div className="font-paragraph text-sm text-background">Beta Launch</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl font-black text-primary mb-2">100%</div>
              <div className="font-paragraph text-sm text-background">Free Beta Access</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold">
              <Link to="/contact">
                Join Waitlist
                <Mail className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-background text-background hover:bg-background hover:text-deep-black px-8 py-6 text-base font-semibold">
              <Link to="/contact">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full bg-background py-12 border-t border-gray-200">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-bold text-deep-black">RENTVYNE</h3>
              <p className="font-paragraph text-sm text-deep-black">
                The future of property management is coming soon. Modern tools for smarter landlords and shortlet owners.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-heading text-base font-semibold text-deep-black">Coming Features</h4>
              <div className="space-y-2">
                <div className="font-paragraph text-sm text-gray-600">Tenant Management</div>
                <div className="font-paragraph text-sm text-gray-600">Rent Tracking</div>
                <div className="font-paragraph text-sm text-gray-600">Shortlet Management</div>
                <div className="font-paragraph text-sm text-gray-600">Digital Tools</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading text-base font-semibold text-deep-black">Stay Updated</h4>
              <p className="font-paragraph text-sm text-deep-black">
                Be the first to know when we launch. Join our waitlist for exclusive early access.
              </p>
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link to="/contact">
                  Join Waitlist
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="font-paragraph text-sm text-deep-black">{"© 202Rentvyne. All rights reserved. Coming soon to revolutionize property management."}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
