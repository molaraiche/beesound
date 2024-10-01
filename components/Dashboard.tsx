import FormInputs from "./shared/FormInputs";
import Table from "./Table";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";

const Dashboard = () => {
  return (
    <section>
      <Modal>
        <div className='flex justify-end'>
          <ModalTrigger className='bg-primary font-medium'>
            <span>Add New Product</span>
          </ModalTrigger>
        </div>
        <ModalBody className=' w-[90%] mx-[10%] rounded-lg'>
          <ModalContent className='bg-secondary'>
            <FormInputs />
          </ModalContent>
        </ModalBody>
      </Modal>
      <Table data={[]} />
    </section>
  );
};

export default Dashboard;
