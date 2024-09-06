import { ChevronDown, ChevronUp } from 'react-feather';
import './acordeonStyle.css';
const Accordion = ({
  children,
  title,
  icon,
  activeAccordion,
  setActiveAccordion,
}) => {
  const handleAction = (t) => {
    if (t === activeAccordion) setActiveAccordion('');
    else setActiveAccordion(t);
  };
  return (
    // <div className="acordeon">
    //   <div className={`acor_item `}>
    //     <div className="acor_header">
    //       <h3>{title}</h3>
    //       <ChevronDown />
    //     </div>
    //     <div className="acor_content">{children}</div>
    //   </div>
    // </div>
    <div className="accordion">
      <div className="accordion_heading">
        <div onClick={() => handleAction(title)} className="container">
          <span className="">{icon}</span>
          <p className="">{title}</p>
          <span className="flex-[1] flex justify-end">
            {activeAccordion === title ? <ChevronDown /> : <ChevronUp />}
          </span>
        </div>
      </div>

      <div
        className={`accordion_content ${activeAccordion === title ? 'open' : 'close'} `}
      >
        <div className="content_container">{children}</div>
      </div>
    </div>
  );
};
export default Accordion;
