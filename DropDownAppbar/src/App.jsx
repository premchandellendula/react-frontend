import { useState } from "react"


function App() {

  return (
    <>
      <div className="flex h-screen justify-center bg-neutral-900 px-3 py-12 gap-x-10">
        <FlyoutLink href="#" FlyoutContent={PricingContent} >
          Pricing
        </FlyoutLink>

        <FlyoutLink href="#" FlyoutContent={PricingContent} >
          Shop
        </FlyoutLink>
      </div>
    </>
  )
}

const FlyoutLink = ({children, href, FlyoutContent}) => {
  const [open, setOpen] = useState(true);

  const showFlyout = open && FlyoutContent;

  return <div 
  onMouseEnter={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
  className="relative w-fit h-fit">
    <a href={href} className="relative text-white">{children}
      <span 
      style={{ 
        transform: showFlyout ? "scaleX(1)" : "scaleX(0)"
       }}
      className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out"></span>
    </a>
    {showFlyout && (
      <div className="absolute left-1/2 top-12 -translate-x-1/2 bg-white text-black">
        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>
        <FlyoutContent />
      </div>
    )}
  </div>
}

const PricingContent = () => {
  return <div className="w-64 bg-white p-6 shadow-xl">
    <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Individuals</h3>
        <a href="#" className="block text-sm hover:underline">
          Introduction
        </a>
        <a href="#" className="block text-sm hover:underline">
          Pay as you go
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Companies</h3>
        <a href="#" className="block text-sm hover:underline">
          Startups
        </a>
        <a href="#" className="block text-sm hover:underline">
          SMBs
        </a>
        <a href="#" className="block text-sm hover:underline">
          Enterprise
        </a>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
  </div>
}

export default App
