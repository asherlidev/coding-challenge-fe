import Item from "./Item";

export default function RollingData() {
  const data = [
    {
      title: "35.36%",
      subtitle: "Inverstors equity allocation",
      color: "#bdc6d9",
    },
    {
      title: "3.93%",
      subtitle: "Stakehoders equidity allocation",
      color: "#bdc6d9",
    },
    { title: "12 months", subtitle: "Lock-up period", color: "#decb3b" },
    { title: "USDC", subtitle: "Reserve currency", color: "#6feab9" },
    { title: "$5000", subtitle: "Minimum investment", color: "#6feab9" },
  ];
  return (
    <div className="main-difi_staking my-5">
      <div className="font-36 main-bold color-black my-4">
        Fair Rolling SAFE Parameters
      </div>
      <div className="p-30 w-100 rolling-data">
        {data.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
