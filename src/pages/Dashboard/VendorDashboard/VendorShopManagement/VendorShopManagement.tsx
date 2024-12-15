import { useGetLoggedInUserShopQuery } from "../../../../redux/api/api";

const VendorShopManagement = () => {
  const userData = JSON.parse(localStorage.getItem("m_shop_user") || "{}");
  const { data: shopData } = useGetLoggedInUserShopQuery(userData?.id);

  console.log(shopData);

  const shops = shopData?.data || [];

  const handleUpdate = (shopId: string) => {
    console.log(`Update shop with ID: ${shopId}`);
    alert(`Update shop with ID: ${shopId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Vendor Shop Management
        </h1>
        {shops.length > 0 ? (
          <div className="space-y-6">
            {shops.map((shop: any) => (
              <div
                key={shop.id}
                className="flex bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                {/* Shop Logo */}
                <img
                  src={shop.logo}
                  alt={`${shop.name} Logo`}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                {/* Shop Details */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-blue-700 mb-2">
                    {shop.name || "Unnamed Shop"}
                  </h2>
                  <p className="text-gray-600 mb-1">
                    Owner: {shop.vendor?.name || "N/A"}
                  </p>
                  <p className="text-gray-600 mb-1">
                    Email: {shop.vendor?.email || "N/A"}
                  </p>
                  <p className="text-gray-600 mb-1">
                    Description: {shop.description || "No description available"}
                  </p>
                  <p className="text-gray-600">
                    Location: {shop.location || "N/A"}
                  </p>
                  <button
                    onClick={() => handleUpdate(shop.id)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Update Shop
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-8">
            <p>No shops available.</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Add Shop
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorShopManagement;
