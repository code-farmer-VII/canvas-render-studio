import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Lorem',
      href: '#',
    },
    {
      title: 'Lorem',
      href: '#',
    },
    {
      title: 'Lorem',
      href: '#',
    },
    {
      title: 'Lorem',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'Github' },
  ];

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-background"></div>
            </div>
          </div>

          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm">
          © Copyright 2022, All Rights Resereved by Yonile
        </div>
      </div>
    </footer>
  );
};

export default Footer;
