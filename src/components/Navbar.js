function Navbar() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/006/547/168/non_2x/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg"
                        className="w-10 h-10 text-white rounded-full"
                    />
                    <span className="ml-3 text-xl">ShopNow</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">Home</a>
                    <a className="mr-5 hover:text-gray-900">About</a>
                    <a className="mr-5 hover:text-gray-900">Services</a>
                    <a className="mr-5 hover:text-gray-900">Contact</a>
                </nav>
            </div>
        </header>

    );
}

export default Navbar;