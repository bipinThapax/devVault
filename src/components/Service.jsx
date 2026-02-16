import { GoProject } from "react-icons/go";
import { ImStatsBars } from "react-icons/im";
import { VscGithubProject } from "react-icons/vsc";

const Service = () => {
  return (
    <section className="services bg-[#060608] px-5 py-15  text-center flex flex-col items-center gap-6 justify-center ">
      <div className="servicesHeadings  flex flex-col gap-4">
        <h2 className="text-4xl font-bold">
          Everything you need to ship faster
        </h2>
        <h4 className="text-gray-600 text-md ">
          Streamlined tools designed for the modern developer workflow.
        </h4>
      </div>
      <div className="cardContainer flex justify-center flex-wrap gap-10 p-10 text-start ">
        <div className="card p-6 flex  flex-col max-w-100.5 w-auto min-w-40 gap-4 items-start  rounded-md border border-[#262525] bg-[#12101047]    ">
          <div className="icon text-blue-700 p-2 bg-[#08296a22] rounded-xl inline-block ">
            <GoProject className="text-2xl box-border " />
          </div>
          <div className="cardHeading font-semibold text-xl">
            <h3>Project Management</h3>
          </div>
          <div className="cardDescription text-gray-500">
            <p>
              Organize your side project with a linear-style issue tracker and
              inituitive kanban boards.
            </p>
          </div>
        </div>
        <div className="card p-6 flex  flex-col max-w-100.5 w-auto min-w-40 gap-4 items-start   rounded-md border border-[#262525] bg-[#12101047]     ">
          <div className="icon text-[#0cdebf] p-2 bg-[#0eada522] rounded-xl inline-block ">
            <ImStatsBars className="text-2xl box-border " />
          </div>
          <div className="cardHeading font-semibold text-xl">
            <h3>Progress Tracking</h3>
          </div>
          <div className="cardDescription text-gray-500">
            <p>
              Visualize your code activity and project completion rates with
              beautiful, interactive charts.
            </p>
          </div>
        </div>
        <div className="card p-6 flex  flex-col max-w-100.5 w-auto min-w-40 gap-4 items-start rounded-md border border-[#262525] bg-[#12101047]     ">
          <div className="icon text-amber-500 p-2 bg-[#6a600822]  rounded-xl inline-block ">
            <VscGithubProject className="text-2xl box-border " />
          </div>
          <div className="cardHeading font-semibold text-xl">
            <h3>Portfolio Showcase</h3>
          </div>
          <div className="cardDescription text-gray-500">
            <p>
              Automatically generate a stunning portfolio page from your
              completed projects to share with the world
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
