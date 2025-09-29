'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, Clock, MapPin, Phone, Star, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative z-50 bg-primary/95 backdrop-blur-sm border-b-4 border-italian-gold">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/generated/moms-spaghetti-logo.png"
                alt="Mom's Spaghetti"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h1 className="font-italian-display text-2xl text-primary-foreground">
                  Mom's Spaghetti
                </h1>
                <p className="font-italian-body text-sm text-primary-foreground/80">
                  Authentic Italian Cuisine Since 1950
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="font-italian-body text-primary-foreground hover:text-italian-gold transition-colors">
                Home
              </a>
              <Link href="/menu" className="font-italian-body text-primary-foreground hover:text-italian-gold transition-colors">
                Menu
              </Link>
              <Link href="/story" className="font-italian-body text-primary-foreground hover:text-italian-gold transition-colors">
                Our Story
              </Link>
              <a href="#contact" className="font-italian-body text-primary-foreground hover:text-italian-gold transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center hero-italian texture-overlay">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-background-kitchen.jpg"
            alt="Italian Kitchen"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="roman-column inline-block px-8 py-4 mb-8">
              <div className="flex items-center gap-3 justify-center">
                <ChefHat className="w-6 h-6 text-italian-burgundy" />
                <span className="font-italian-body text-lg text-italian-burgundy font-medium">
                  Taste the Tradition
                </span>
                <ChefHat className="w-6 h-6 text-italian-burgundy" />
              </div>
            </div>

            <h1 className="font-italian-display text-6xl md:text-8xl font-bold mb-6">
              TASTE THE
              <br />
              <span className="text-italian-gold">TRADITION</span>
            </h1>

            <p className="font-italian-body text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-italian-cream">
              Experience authentic Italian flavors passed down through generations.
              Fresh pasta made daily with love, just like Nonna used to make.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/menu">
                <Button
                  size="lg"
                  className="italian-card px-12 py-6 text-lg font-italian-body bg-italian-gold text-italian-burgundy hover:bg-secondary smooth-hover"
                >
                  View Our Menu
                  <Utensils className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-6 text-lg font-italian-body border-2 border-italian-cream text-italian-cream hover:bg-italian-cream hover:text-primary smooth-hover"
              >
                Make Reservation
                <Clock className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowRight className="w-6 h-6 text-italian-cream rotate-90" />
          </div>
        </div>
      </section>

      {/* Featured Dishes Preview */}
      <section className="py-20 px-4 bg-background vine-decoration">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-italian-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Signature Dishes
            </h2>
            <p className="font-italian-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Each dish tells a story of tradition, crafted with the finest ingredients and time-honored recipes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Spaghetti Carbonara",
                image: "/generated/spaghetti-carbonara.jpg",
                description: "Creamy, rich, and perfectly balanced with pancetta and freshly cracked pepper.",
                price: "$18"
              },
              {
                name: "Margherita Pizza",
                image: "/generated/margherita-pizza.jpg",
                description: "Wood-fired perfection with San Marzano tomatoes and fresh mozzarella.",
                price: "$16"
              },
              {
                name: "Classic Lasagna",
                image: "/generated/classic-lasagna.jpg",
                description: "Layers of love with our signature meat sauce and béchamel.",
                price: "$22"
              }
            ].map((dish, index) => (
              <div key={index} className="italian-card rounded-2xl overflow-hidden smooth-hover group">
                <div className="relative h-64">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-italian-gold text-italian-burgundy px-3 py-1 rounded-full font-italian-body font-semibold">
                      {dish.price}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-italian-heading text-2xl font-bold text-primary mb-2">
                    {dish.name}
                  </h3>
                  <p className="font-italian-body text-muted-foreground mb-4">
                    {dish.description}
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-italian-gold fill-current" />
                    ))}
                    <span className="font-italian-body text-sm text-muted-foreground ml-2">
                      (4.9/5)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <Button className="italian-card px-8 py-4 text-lg font-italian-body bg-primary hover:bg-accent smooth-hover">
                Explore Full Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-italian-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Indulge?
          </h2>
          <p className="font-italian-body text-xl mb-8">
            Join us for an unforgettable dining experience in the heart of Little Italy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-italian-gold text-italian-burgundy hover:bg-secondary px-8 py-4 text-lg font-italian-body smooth-hover"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call for Reservations
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-italian-body smooth-hover"
            >
              <MapPin className="mr-2 w-5 h-5" />
              Find Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t-4 border-italian-gold py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/generated/moms-spaghetti-logo.png"
                  alt="Mom's Spaghetti"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h3 className="font-italian-display text-xl text-primary">
                  Mom's Spaghetti
                </h3>
              </div>
              <p className="font-italian-body text-muted-foreground">
                Serving authentic Italian cuisine with love since 1950.
              </p>
            </div>
            <div>
              <h4 className="font-italian-heading text-lg font-bold text-primary mb-4">Hours</h4>
              <div className="font-italian-body text-muted-foreground space-y-2">
                <p>Monday - Thursday: 11am - 10pm</p>
                <p>Friday - Saturday: 11am - 11pm</p>
                <p>Sunday: 12pm - 9pm</p>
              </div>
            </div>
            <div>
              <h4 className="font-italian-heading text-lg font-bold text-primary mb-4">Contact</h4>
              <div className="font-italian-body text-muted-foreground space-y-2">
                <p>📞 (555) 123-PASTA</p>
                <p>📧 info@momsspaghetti.com</p>
                <p>📍 123 Little Italy St, NY 10013</p>
              </div>
            </div>
            <div>
              <h4 className="font-italian-heading text-lg font-bold text-primary mb-4">Follow Us</h4>
              <div className="font-italian-body text-muted-foreground space-y-2">
                <p>Facebook | Instagram</p>
                <p>Twitter | TikTok</p>
                <p>#MomsSpaghetti</p>
              </div>
            </div>
          </div>
          <div className="border-t border-italian-gold/20 mt-8 pt-8 text-center">
            <p className="font-italian-body text-muted-foreground">
              © 2024 Mom's Spaghetti. All rights reserved. | Made with ❤️ in Little Italy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}