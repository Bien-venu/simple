import { MdSwapHorizontalCircle } from "react-icons/md";
import { RiProgress1Line } from "react-icons/ri";

export const messages = [
  {
    id: 1,
    name: "Building new Modern Templates",
    code: "Kon1",
    task: "Modern Template 8",
    status: "todo",
    priority: "medium",
    labels: "improvement",
    message:
      "Link to component - https://www.figma.com/design/u5pf2AySo4w85sBSPpdJVT/Konectin-Product-(Resume-Builder)-V2?node-id=7690-101315&m=dev",
    assigner: "Konectintech",
    worker: ["Bienvenu", "Konectintech", "Ishimwe"],
    activity: "Konectintech assigned to you",
    move: [
      {
        icon: MdSwapHorizontalCircle,
        creator: "Konectintech",
        message: "created the issue",
        date: "",
      },
      {
        icon: RiProgress1Line,
        creator: "I.bienvenu",
        message: "changed status Todo to In Progress",
        date: "",
      },
    ],
    date: "17/07/2024",
  },
];
