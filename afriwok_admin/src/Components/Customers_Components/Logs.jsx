import { Circle } from 'lucide-react';

const logData = [
  {
    date: "2024/04/09 00:12:06",
    description: "You rated service provider"
  },
  {
    date: "2024/04/09 00:12:06",
    description: "You tipped Service provider with 20 WOKs token"
  },
  {
    date: "2024/04/09 00:12:06",
    description: "You approved work order"
  },
  {
    date: "2024/04/09 00:12:06",
    description: "Service Provider marked work order as completed"
  },
  {
    date: "2024/04/09 00:12:06",
    description: "Service Provider Started work order"
  },
  {
    date: "2024/04/09 00:12:06",
    description: "Work order was acknowledge by Service Provider"
  },
  {
    date: "2024/04/09 00:12:06",
    description: "You initiated a work order deposit of N200,000.00 to escrow wallet"
  }
];

const Logs = () => {
  return (
    <div className="rounded-lg bg-white p-6">
      <div className="space-y-6">
        {logData.map((log, index) => (
          <div key={index} className="flex items-start gap-4">
            <Circle className="mt-1 h-2 w-2 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">{log.date}</p>
              <p className="font-medium">{log.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logs;

