const create = (id, parent, width, height) => {
  const divWrapper = document.createElement('div');
  const canvasElem = document.createElement('canvas');
  parent.appendChild(divWrapper);
  divWrapper.appendChild(canvasElem);

  divWrapper.id = id;
  canvasElem.width = width;
  canvasElem.height = height;

  const ctx = canvasElem.getContext('2d');

  return {
    ctx,
    id,
  };
};

const createReportList = (wrapperId) => {
  const list = document.createElement('ul');
  list.id = `${wrapperId}-reporter`;

  const canvasWrapper = document.getElementById(wrapperId);
  canvasWrapper.appendChild(list);

  return list.id;
};

export { create, createReportList };
