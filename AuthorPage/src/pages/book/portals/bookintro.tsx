import PortalChoice from './portal'



interface BookIntro {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  progress: number;
}

const BookIntro: React.FC = () => {
return (
  <div className="min-h-screen bg-white py-40">

      <div className="h-[600px] w-full">
        <PortalChoice />
      </div>
    </div>
  );
};

  export default BookIntro;
