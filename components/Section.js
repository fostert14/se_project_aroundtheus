export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItems(element) {
    this._container.append(element);
  }

  renderItems(items) {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
