const sentNotifications = [
  {
    recipient: "Amina Yusuf",
    type: "KYC Rejected",
    channel: "In-app + Email",
    content: "Your KYC verification was unsuccessful. Please review your details and resubmit your documents.",
    sent: "Today 5:48am",
    status: "Active",
  },
  {
    recipient: "Ibrahim Musa",
    type: "KYC Approved",
    channel: "In-app + Email",
    content: "Your account is verified- you can now send, receive, and scan to pay.",
    sent: "Today 6:15am",
    status: "Active",
  },
  {
    recipient: "Chinedu Okafor",
    type: "Account Suspended",
    channel: "In-app + Email",
    content: "Your account has been suspended. Please contact support for more information.",
    sent: "Today 4:30am",
    status: "Active",
  },
  {
    recipient: "Fatima Bello",
    type: "KYC On Hold",
    channel: "In-app + Email",
    content: "Your KYC verification is on hold while we review the additional information provided.",
    sent: "Today 3:42am",
    status: "Active",
  },
  {
    recipient: "Kwame Mensah",
    type: "Float Top-up Approved",
    channel: "In-app",
    content: "Your float top-up has been approved and is now available in your account.",
    sent: "Today 2:18am",
    status: "Pending",
  },
];

interface SentAllProps {
  notificationType?: string;
}

export default function SentAll({ notificationType = "All" }: SentAllProps) {
  const notifications =
    notificationType === "All"
      ? sentNotifications
      : sentNotifications.filter((notification) => notification.type === notificationType);

  return (
    <section
      aria-label={`${notificationType} sent notifications`}
      className="w-full overflow-hidden border-y border-[#D6D6D6] bg-white"
    >
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[850px] table-fixed border-collapse text-left text-[14px] text-[#6C6C6C]">
          <colgroup>
            <col className="w-[14%]" />
            <col className="w-[16%]" />
            <col className="w-[12%]" />
            <col className="w-[28%]" />
            <col className="w-[17%]" />
            <col className="w-[13%]" />
          </colgroup>
          <thead>
            <tr className="h-[72px] border-b border-[#D6D6D6] bg-[#F7F7F7] text-[16px] font-[600] text-[#6C6C6C]">
              <th className="px-[16px]" scope="col">
                To
              </th>
              <th className="px-[16px]" scope="col">
                Type
              </th>
              <th className="px-[16px]" scope="col">
                Channel
              </th>
              <th className="px-[16px]" scope="col">
                Content
              </th>
              <th className="px-[16px]" scope="col">
                Sent
              </th>
              <th className="px-[16px]" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr
                className="min-h-[90px] border-b border-[#D6D6D6] last:border-b-0"
                key={notification.recipient}
              >
                <td className="px-[16px] py-[20px]">{notification.recipient}</td>
                <td className="px-[16px] py-[20px]">{notification.type}</td>
                <td className="px-[16px] py-[20px]">{notification.channel}</td>
                <td className="px-[16px] py-[20px] whitespace-normal">
                  {notification.content}
                </td>
                <td className="whitespace-nowrap px-[16px] py-[20px]">
                  {notification.sent}
                </td>
                <td className="px-[16px] py-[20px]">
                  <span
                    className={`inline-flex min-w-[112px] items-center justify-center rounded-full px-[16px] py-[10px] font-[500] ${
                      notification.status === "Pending"
                        ? "bg-[#FFF4DB] text-[#B7791F]"
                        : "bg-[#E7F6EC] text-[#078132]"
                    }`}
                  >
                    {notification.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
