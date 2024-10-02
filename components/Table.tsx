import { MdEdit, MdDelete } from "react-icons/md";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
import EditFormInputs from "./shared/EditFormInputs";

interface TableProps {
  data: { col1: string; col2: string }[];
}

const data = [
  {
    col1: "Mohamed",
    col2: "me",
  },
  {
    col1: "Mohamed",
    col2: "me",
  },
  {
    col1: "Mohamed",
    col2: "me",
  },
  {
    col1: "Mohamed",
    col2: "me",
  },
  {
    col1: "Mohamed",
    col2: "me",
  },
];

const Table: React.FC<TableProps> = () => {
  return (
    <div className='overflow-x-auto  text-secondary'>
      <Modal>
        <table className='min-w-full table-auto border-collapse my-10'>
          <thead>
            <tr>
              <th className='px-4 py-2 border w-[80%]'>Product</th>
              <th className='px-4 py-2 border w-[20%]'>Management</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className='even:bg-gray-100 odd:bg-white'>
                <td className='px-4 py-2 border'>{row.col1}</td>
                <td className=' py-2  border flex items-center justify-between px-10 lg:flex-nowrap flex-wrap gap-5'>
                  <button className='bg-secondary text-white flex items-center gap-2 py-2 px-4 rounded-[10px] hover:opacity-80 w-full'>
                    <ModalTrigger className=' text-white flex items-center gap-2 py-2 px-4 rounded-[10px] hover:opacity-80 w-full'>
                      <MdEdit />
                    </ModalTrigger>
                    <span>Edit</span>
                  </button>
                  <button className='bg-red-500 text-white flex items-center gap-2 py-2 px-4 rounded-[10px] hover:opacity-80 w-full'>
                    <span>
                      <MdDelete />
                    </span>
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ModalBody className=' w-[90%] mx-[10%] rounded-lg'>
          <ModalContent className='bg-secondary'>
            <EditFormInputs />
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Table;
