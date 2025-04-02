import Image from "next/image";
import Link from 'next/link'
export default function Index() {
  const services = [
    {
      title: "Trusted and Secure",
      description:
        "Our robust encryption ensures that your transactions are safe and protected, every time.",
    },
    {
      title: "Global Coverage",
      description:
        "With Wise, you can send money across borders quickly, reaching over 100 countries worldwide.",
    },
    {
      title: "Mobile Wallet Integration",
      description:
        "Connect your preferred mobile wallet to Wise and make transactions effortlessly from your phone.",
    },
    {
      title: "Real-time Tracking",
      description:
        "Stay informed with real-time tracking of your transfers, ensuring full transparency from start to finish.",
    },
  ];
  return (
    <div className="bg-black text-white space-y-16">
      <header className="flex justify-between p-2">
        {/* <h1 className="font-semibold">Wise</h1> */}
        <svg className="np-logo-svg np-logo-svg--size-sm" xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="none"><path fill="white" d="M6.82603 7.23227 0 15.2096h12.1882l1.3696-3.7616H8.33504l3.19126-3.68968.0102-.09787-2.07504-3.57192h9.33564L11.5604 24h4.9522l8.7385-24H2.6758l4.15023 7.23227Z"></path></svg>
        <div>
          {/* <p>support@Wise.com</p> */}
          {/* <p>+447 36 576 2180</p> */}
        </div>
      </header>

      <div className="text-center px-4 space-y-4">
        <h1 className="text-3xl font-bold">Wise</h1>
        <p className="text-purple-300 text-xl ">
          Seamlessly Move Your Money Around the World
        </p>
        <p className="text-sm">
          Connect your mobile wallet to Wise and experience secure, fast,
          and global money transfers like never before.
        </p>

        <div className="grid grid-cols-1 max-w-lg mx-auto my-8 gap-4">
          <Link
            href="/login"
            className="p-4 text-black font-semibold bg-lime-400 rounded-md"
          >
            Track Your Transfer
          </Link>
          <Link
            href="/login"
            className="p-4 text-black font-semibold bg-lime-400 rounded-md"
          >
            Accept Payment
          </Link>
          <Link
            href="/login"
            className="p-4 text-black font-semibold bg-lime-400 rounded-md"
          >
            Cancel a Transaction
          </Link>
        </div>
      </div>

      <section className="px-4 space-y-8">
        <h1 className="text-xl text-blue-600 font-bold text-center">
          About Wise
        </h1>
        <p className="text-center max-w-xl mx-auto">
          At Wise, we offer a trusted platform for peer-to-peer money
          transfers, giving users the flexibility to send and receive funds
          globally with the highest level of security and transparency. Our goal
          is to simplify international money movement, so you can focus on what
          matters most.
        </p>
        <h1 className="text-xl text-blue-600 font-bold text-center">
          Our Services
        </h1>{" "}
        <div className="grid grid-cols-1 md:grid-cols-4 max-w-3xl mx-auto my-8 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              title={service.title}
              description={service.description}
              key={index}
            />
          ))}
        </div>
      </section>

      <section className="p-8 space-y-8 bg-purple-200  text-center">
        <h1 className="text-xl text-blue-600 font-bold">
          Get Started with Wise Today!
        </h1>
        <p className="text-black">
          Join thousands of users who trust Wise for fast, easy, and
          secure global money transfers.
        </p>
        <div>
          <Link
            href="/login"
            className="p-4 w-full text-black font-semibold bg-lime-400 rounded-md"
          >
            Create An Account
          </Link>
        </div>
      </section>
    </div>
  );
}

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="rounded-md bg-purple-200 text-center p-8 space-y-4">
    <h2 className="font-bold text-indigo-800 text-lg">{title}</h2>
    <p className="text-black">{description}</p>
  </div>
);