'use client';

import { Button } from "@/components/ui/button";
import { ArrowLeft, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    category: "Pasta",
    items: [
      {
        name: "Spaghetti Carbonara",
        image: "/generated/spaghetti-carbonara.jpg",
        description: "Creamy, rich, and perfectly balanced with pancetta and freshly cracked pepper.",
        price: "$18",
        rating: 4.9
      },
      {
        name: "Classic Lasagna",
        image: "/generated/classic-lasagna.jpg",
        description: "Layers of love with our signature meat sauce and béchamel.",
        price: "$22",
        rating: 4.8
      }
    ]
  },
  {
    category: "Pizza",
    items: [
      {
        name: "Margherita Pizza",
        image: "/generated/margherita-pizza.jpg",
        description: "Wood-fired perfection with San Marzano tomatoes and fresh mozzarella.",
        price: "$16",
        rating: 4.9
      }
    ]
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Chicken Parmigiana",
        image: "/generated/chicken-parmigiana.jpg",
        description: "Golden breaded chicken breast with melted mozzarella and marinara sauce.",
        price: "$24",
        rating: 4.7
      }
    ]
  },
  {
    category: "Salads",
    items: [
      {
        name: "Caesar Salad",
        image: "/generated/caesar-salad.jpg",
        description: "Fresh romaine lettuce with parmesan shavings, croutons, and creamy dressing.",
        price: "$14",
        rating: 4.6
      }
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative z-50 bg-primary/95 backdrop-blur-sm border-b-4 border-italian-gold">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-primary-foreground hover:text-italian-gold transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-italian-body">Back to Home</span>
            </Link>
            <div className="flex items-center gap-4">
              <Image
                src="/generated/moms-spaghetti-logo.png"
                alt="Mom's Spaghetti"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h1 className="font-italian-display text-xl text-primary-foreground">
                  Mom's Spaghetti
                </h1>
                <p className="font-italian-body text-sm text-primary-foreground/80">
                  Our Complete Menu
                </p>
              </div>
            </div>
            <div className="w-20"></div> {/* Spacer for balance */}
          </div>
        </div>
      </header>

      {/* Menu Hero */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-italian-display text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-italian-gold">Menu</span>
          </h1>
          <p className="font-italian-body text-xl mb-8">
            Every dish crafted with passion, tradition, and the finest ingredients
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {menuItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="font-italian-display text-4xl font-bold text-primary mb-4 relative">
                  <span className="bg-background px-6">{category.category}</span>
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-italian-gold -z-10"></div>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="italian-card rounded-2xl overflow-hidden smooth-hover group">
                    <div className="md:flex">
                      <div className="relative h-64 md:h-48 md:w-48 md:flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <div className="bg-italian-gold text-italian-burgundy px-3 py-1 rounded-full font-italian-body font-bold text-lg">
                            {item.price}
                          </div>
                        </div>
                      </div>
                      <div className="p-6 flex-1">
                        <h3 className="font-italian-heading text-2xl font-bold text-primary mb-2">
                          {item.name}
                        </h3>
                        <p className="font-italian-body text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(item.rating)
                                    ? 'text-italian-gold fill-current'
                                    : 'text-muted-foreground'
                                }`}
                              />
                            ))}
                            <span className="font-italian-body text-sm text-muted-foreground ml-2">
                              ({item.rating}/5)
                            </span>
                          </div>
                          <Button
                            className="bg-primary hover:bg-accent text-primary-foreground font-italian-body"
                            size="sm"
                          >
                            Order Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-accent text-accent-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-italian-display text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="font-italian-body text-xl mb-8">
            Call us now or visit our restaurant for the full Mom's Spaghetti experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-italian-gold text-italian-burgundy hover:bg-secondary font-italian-body">
              Call (555) 123-PASTA
            </Button>
            <Button variant="outline" size="lg" className="border-2 font-italian-body">
              Make Reservation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t-4 border-italian-gold py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
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
          <p className="font-italian-body text-muted-foreground mb-4">
            📍 123 Little Italy St, NY 10013 | 📞 (555) 123-PASTA
          </p>
          <p className="font-italian-body text-muted-foreground">
            © 2024 Mom's Spaghetti. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}