import AddFormInputs from "./shared/AddFormInputs";
import Table from "./Table";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";

const Dashboard = () => {
  return (
    <section className="w-full">
      <Modal>
        <div className='flex justify-end'>
          <ModalTrigger className='bg-primary font-medium'>
            <span>Add New Product</span>
          </ModalTrigger>
        </div>
        <ModalBody className=' w-[90%] mx-[10%] rounded-lg'>
          <ModalContent className='bg-secondary'>
            <AddFormInputs />
          </ModalContent>
        </ModalBody>
      </Modal>
      <Table data={[]} />
    </section>
  );
};

export default Dashboard;
