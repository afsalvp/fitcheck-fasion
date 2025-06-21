import React from 'react';

function ProductAccordion({ data }) {
  const accordion = [];

  Object.entries(data).forEach(([title, value], i) => {
    accordion.push(
      <div className="accordion-item" key={i}>
        <h5 className="accordion-header" id={"heading" + i}>
          <button
            className={`accordion-button border-bottom font-weight-bold ${
              i !== 0 ? '' : 'collapsed'
            } py-4`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#collapse" + i}
            aria-expanded={i !== 0}
            aria-controls={"collapse" + i}
          >
            {title}
            <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
            <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
          </button>
        </h5>
        <div
          id={"collapse" + i}
          className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
          aria-labelledby={"heading" + i}
          data-bs-parent="#accordionEcommerce"
        >
          <div className="accordion-body text-body text-sm opacity-8">{value}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="accordion mt-5" id="accordionEcommerce">
      {accordion}
    </div>
  );
}

export default ProductAccordion;
