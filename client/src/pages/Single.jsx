import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/13563689/pexels-photo-13563689.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="mountin"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
          <div className="info">
            <span>Biswajit</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sit amet nunc vitae quam finibus ultrices. Aenean vitae imperdiet
          odio, eu fermentum nibh. Sed elementum est et purus aliquam, nec
          laoreet tortor ultrices. In nulla lacus, varius non diam eget, dapibus
          bibendum lorem. Suspendisse in interdum urna, at porttitor justo.
          Curabitur tristique risus orci, efficitur facilisis dui vulputate
          interdum. Nunc vitae tempor orci. Cras tristique rhoncus enim eget
          aliquam. Suspendisse tempor lectus at tortor commodo, sed luctus
          libero interdum. Donec lobortis dui mi, nec venenatis ligula convallis
          non. In efficitur varius turpis, quis consectetur mi pulvinar nec.
          Praesent eros velit, varius non suscipit sit amet, sollicitudin nec
          ipsum. <br />
          <br />
          Cras interdum urna in sagittis gravida. Morbi at diam id turpis
          accumsan mollis ac a nisi. Integer eu mollis libero, non fringilla
          nunc. Etiam non urna in ligula commodo condimentum a sit amet nunc.
          Proin eget tincidunt lacus. Duis tempus tellus convallis egestas
          porta. Nullam placerat, magna sit amet porttitor pharetra, quam turpis
          condimentum odio, in rhoncus urna nibh ultrices mi. Etiam sit amet
          consectetur felis. Pellentesque dignissim sapien nibh, ac lacinia dui
          laoreet a. Proin finibus efficitur magna, sed rutrum metus rutrum non.
          Nulla at mi vulputate lectus tincidunt rutrum. Fusce semper nisi quam,
          id sollicitudin est ullamcorper id. Fusce condimentum, lorem vitae
          porta bibendum, ante quam fermentum ex, eu aliquam quam erat ac velit.
          Morbi quis dolor eget urna accumsan egestas. Morbi eu lacus a quam
          auctor pretium. Proin viverra augue sed purus aliquam, ut placerat
          ligula fringilla.
          <br />
          <br /> Sed venenatis, magna sed sodales volutpat, magna lacus dictum
          ligula, nec convallis elit lectus sit amet elit. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Integer diam sem, finibus ut laoreet sollicitudin, malesuada quis
          odio. Duis vitae vulputate erat. Proin eget dolor at sem facilisis
          molestie. Quisque nisl quam, convallis non sagittis non, consectetur
          sed turpis. Nulla diam ligula, consectetur et dictum at, congue at
          metus. Aliquam id ligula ut eros dictum accumsan in sit amet ex. Nam
          rutrum tempus dapibus. Proin interdum libero vitae massa blandit,
          aliquam tempor nibh pulvinar. Fusce gravida tristique enim eget
          sagittis. Etiam condimentum volutpat nisi. Nam ut tempus metus, vel
          ullamcorper neque. Curabitur sed convallis nisl. Proin sed lectus
          ligula. Phasellus pellentesque bibendum orci, sed vehicula metus
          scelerisque lacinia. Mauris elementum quis enim ut faucibus. Ut
          pellentesque purus sed ultrices elementum. Fusce et ultricies tortor.
          Aenean elementum tellus eget eleifend semper. Praesent ligula sapien,
          tempus et justo quis, efficitur vehicula diam. Ut porta cursus massa
          at venenatis. Maecenas dignissim tincidunt nisi, quis mollis massa
          iaculis at.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
