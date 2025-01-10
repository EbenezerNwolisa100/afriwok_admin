import { ChevronRight } from 'lucide-react';

const ticketData = [
  {
    date: "2024/04/09 00:12:06",
    description: "Inaccessible account...",
    ticketId: "TX123 098",
    status: "Closed"
  },
  {
    date: "2024/04/09 00:12:06",
    description: "Inaccessible account...",
    ticketId: "TX123 098",
    status: "Closed"
  },
  {
    date: "2024/04/09 00:12:06",
    description: "Inaccessible account...",
    ticketId: "TX123 098",
    status: "Closed"
  },
  {
    date: "2024/04/09 00:12:06",
    description: "Inaccessible account...",
    ticketId: "TX123 098",
    status: "Closed"
  },
  {
    date: "2024/04/09 00:12:06",
    description: "Inaccessible account...",
    ticketId: "TX123 098",
    status: "Closed"
  }
];

const Tickets = () => {
  return (
    <div className="rounded-lg bg-white">
      <div className="divide-y">
        {ticketData.map((ticket, index) => (
          <div key={index} className="flex items-center justify-between p-6">
            <div className="flex items-start gap-4">
              <input type="checkbox" className="mt-1 rounded border-gray-300" />
              <div>
                <p className="text-sm text-gray-500">{ticket.date}</p>
                <p className="font-medium">{ticket.description}</p>
                <p className="text-sm text-gray-500">{ticket.ticketId}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                {ticket.status}
              </span>
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                View Ticket details
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;

