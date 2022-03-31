const Footer = () => {
  return (
    <footer className="mt-48">
        {/* Back to top */}
        <div className="flex flex-grow w-full bg-amazon_blue-light py-4 text-white">
        <p className="w-full text-white text-center link text-xs">Back to top</p>
        </div>
        {/* Footer Menu */}
        <div className="flex flex-grow w-full bg-gradient-to-b from-amazon_blue to-amazon_blue-light py-4 text-white md:grid-cols-2 lg:grid-cols-4 px-96">

        <div className="flex flex-col w-full text-white py-8">
            <h4 className="font-extrabold pb-6">Get to Know Us</h4>
            <p className="link py-1 text-xs">Careers</p>
            <p className="link py-1 text-xs">Blog</p>
            <p className="link py-1 text-xs">About Amazon</p>
            <p className="link py-1 text-xs">Investor Relations</p>
            <p className="link py-1 text-xs">Amazon Devices</p>
            <p className="link py-1 text-xs">Amazon Science</p>
        </div>
        <div className="flex flex-col w-full text-white py-8">
            <h4 className="font-extrabold pb-4">Make Money with Us</h4>
            <p className="link py-1 text-xs">Sell Products on Amazon</p>
            <p className="link py-1 text-xs">Sell on Amazon Business</p>
            <p className="link py-1 text-xs">Sell app on Amazon</p>
            <p className="link py-1 text-xs">Become an Affiliate</p>
            <p className="link py-1 text-xs">Advertise your Products</p>
            <p className="link py-1 text-xs">Self-Publish with Us</p>
            <p className="link py-1 text-xs">Host an Amazon Hub</p>

        </div>
        <div className="flex flex-col w-full text-white py-8">
            <h4 className="font-extrabold pb-4">Amazon Payment Products</h4>
            <p className="link py-1 text-xs">Amazon Business Card</p>
            <p className="link py-1 text-xs">Shop with Points</p>
            <p className="link py-1 text-xs">Reload Your Balance</p>
            <p className="link py-1 text-xs">Amazon Currency Converter</p>

        </div>
        <div className="flex flex-col w-full text-white py-8">
            <h4 className="font-extrabold pb-4">Let Us Help You</h4>
            <p className="link py-1 text-xs">Amazon and COVID-19</p>
            <p className="link py-1 text-xs">Your Account</p>
            <p className="link py-1 text-xs">Your Orders</p>
            <p className="link py-1 text-xs">Shipping Rates & Policies</p>
            <p className="link py-1 text-xs">Returns & Replacements</p>
            <p className="link py-1 text-xs">Amazon Assistant</p>
            <p className="link py-1 text-xs">Help</p>
        </div>
        </div>
        <hr className="border-none h-0.5 bg-gray-700"/>

        <div className="flex flex-grow w-full bg-amazon_blue-light py-1 text-white justify-center align-middle h-auto">
            <img src="https://clipartcraft.com/images/amazon-smile-logo-vector-5.png" alt="Amazon Logo" width="100" className="link"/>
        </div>
        
        <div className="flex flex-grow w-full bg-amazon_blue py-4 text-white justify-center align-middle h-auto">
            <small>© 1996-2022, Amazon.com, Inc. or its affiliates</small>
        </div>

    </footer>
  )
}

export default Footer