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
            <div className='text-white text-2xl text-center mb-5 font-semibold'>
              Create New Product
            </div>
            <form action='' className='flex flex-col w-full flex-wrap gap-4'>
              <div className='flex items-center justify-between text-white gap-4 lg:flex-nowrap flex-wrap'>
                <label htmlFor='' className='label'>
                  Title:
                </label>
                <input
                  type='text'
                  className='input'
                  placeholder='Title'
                  name='title'
                />
              </div>
              <div className='flex items-center justify-between text-white gap-4 lg:flex-nowrap flex-wrap'>
                <label htmlFor='' className='label'>
                  Price:
                </label>
                <input
                  type='number'
                  className='input'
                  placeholder='Price'
                  id=''
                  name='price'
                />
              </div>
              <div className='flex items-center justify-between text-white gap-4 lg:flex-nowrap flex-wrap'>
                <label htmlFor='' className='label'>
                  Main Image:
                </label>
                <input
                  type='file'
                  className='input  block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-secondary hover:file:bg-blue-100'
                  id='image'
                  name=''
                />
              </div>
              <div className='flex items-center justify-between text-white gap-4'>
                <form action='' className='flex w-full items-center gap-4'>
                  <label htmlFor='' className='label'>
                    Colors:
                  </label>
                  <input
                    type='text'
                    className='input'
                    placeholder='add your hex colors ex: #000'
                    id=''
                    name='colors'
                  />
                </form>
              </div>
              <div className='flex items-center justify-between text-white gap-4 lg:flex-nowrap flex-wrap'>
                <label htmlFor='' className='label'>
                  Brand:
                </label>
                <input
                  type='text'
                  className='input'
                  placeholder='Brand'
                  id=''
                  name='brand'
                />
              </div>
              <div className='flex items-center justify-between text-white gap-4 lg:flex-nowrap flex-wrap'>
                <label htmlFor='' className='label'>
                  Model:
                </label>
                <input
                  type='text'
                  className='input'
                  placeholder='Model'
                  id=''
                  name='model'
                />
              </div>
              <div className='flex items-center justify-between text-white gap-4 lg:flex-nowrap flex-wrap'>
                <label htmlFor='' className='label'>
                  {" "}
                  Factor:
                </label>
                <input
                  type='text'
                  className='input'
                  placeholder='Factor'
                  id=''
                  name='factor'
                />
              </div>
              <div className='flex items-center justify-between text-white gap-4 lg:flex-nowrap flex-wrap'>
                <label htmlFor='' className='label'>
                  Technology:
                </label>
                <input
                  type='text'
                  className='input'
                  placeholder='Technology'
                  id=''
                  name='technology'
                />
              </div>
              <div className='flex items-center justify-between text-white gap-4 lg:flex-nowrap flex-wrap'>
                <label htmlFor='' className='label'>
                  Old Price:
                </label>
                <input
                  type='text'
                  className='input'
                  placeholder='Old Price'
                  id=''
                  name='oldPrice'
                />
              </div>
              <div className='flex items-center justify-between text-white gap-4 lg:flex-nowrap flex-wrap'>
                <label htmlFor='' className='label'>
                  Discount:
                </label>
                <input
                  type='number'
                  className='input'
                  placeholder='Discount'
                  id=''
                  name='discount'
                />
              </div>
              <div className='flex items-center justify-between text-white gap-4 lg:flex-nowrap flex-wrap'>
                <label htmlFor='' className='label'>
                  Type
                </label>
                <input
                  type='text'
                  className='input'
                  placeholder='Type'
                  id='type'
                  name='type'
                />
              </div>
              <div className='flex items-center justify-between text-white gap-4 lg:flex-nowrap flex-wrap'>
                <label htmlFor='' className='label'>
                  Other Images:
                </label>
                <input
                  type='file'
                  className='input block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-secondary hover:file:bg-blue-100'
                  id=''
                  name='images'
                />
              </div>
              <div className='w-full flex items-center justify-center gap-5'>
                <button
                  type='submit'
                  className='bg-primary text-white font-medium py-2 lg:px-40 px-20 rounded-[10px] w-[90%]'>
                  <span className='lg:hidden block'>Add</span>
                  <span className='lg:block hidden'>Create Product</span>
                </button>
              </div>
            </form>
          </ModalContent>
        </ModalBody>
      </Modal>
      <Table data={[]} />
    </section>
  );
};

export default Dashboard;
