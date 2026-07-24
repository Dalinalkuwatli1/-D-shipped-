export default function CookiePolicyPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C59A5A]">
            Privacy
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground font-light">Last updated: August 1, 2026</p>
        </div>
        
        <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">What are cookies?</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">How we use cookies</h2>
            <p>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essential cookies:</strong> Required for the basic functioning of the website (e.g., shopping cart, secure checkout).</li>
              <li><strong>Performance cookies:</strong> Help us understand how visitors interact with the website by collecting information anonymously.</li>
              <li><strong>Marketing cookies:</strong> Used to track visitors across websites to display relevant advertisements.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">Managing your preferences</h2>
            <p>You can change your cookie preferences at any time through your browser settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
