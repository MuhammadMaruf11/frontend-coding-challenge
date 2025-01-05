import { headers } from "next/headers";
import { UserAgent } from "@/views/userAgent";

const UserAgentPage = () => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "Unknown";

  return <UserAgent userAgent={userAgent} />;
};

export default UserAgentPage;
