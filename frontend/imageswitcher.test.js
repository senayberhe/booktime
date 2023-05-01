import React from "react";
import ImageBox from "./imageswitcher";
import renderer from "react-test-renderer";
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
Enzyme.configure({ adapter: new Adapter() });

test("ImageBox switches images correctly", () => {
  const images = [
    { image: "1.jpg", thumbnail: "1.thumb.jpg" },
    { image: "2.jpg", thumbnail: "2.thumb.jpg" },
    { image: "3.jpg", thumbnail: "3.thumb.jpg" },
  ];

  const wrapper = shallow(<ImageBox images={images} imageStart={images[0]} />);
  const currentImage = wrapper.find(".current-image > img").prop("src");
  wrapper.find("div.image").at(2).find("img").simulate("click");
  const newImage = wrapper.find(".current-image > img").prop("src");

  expect(currentImage).not.toEqual(newImage);
});
