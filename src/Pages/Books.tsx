import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookVolumesByQuery } from "../Types/Books";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Books = () => {
  const { query } = useParams();
  const [data, setData] = useState<BookVolumesByQuery>();
  const getData = async () => {
    try {
      const url = `http://localhost:4000/api/books/:${query}`;
      const res: AxiosResponse<BookVolumesByQuery> = await axios.get(url);
      setData(res.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-[1.4rem] p-[2rem] bg-slate-200">
        {data?.items.map((item) => (
          <Card
            key={item.id}
            sx={{
              maxWidth: 345,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "1rem",
              margin: "0 auto",
            }}
          >
            <CardMedia
              content="image/jpeg"
              sx={{ height: 180, width: 150 }}
              image={item.volumeInfo.imageLinks?.thumbnail}
              title={item.volumeInfo.title}
            />
            <div className="w-[80%] h-full flex flex-col justify-between ">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.volumeInfo.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.volumeInfo.subtitle ||
                    item.volumeInfo.description?.slice(0, 100) + "..."}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add to Favourites</Button>
                <a
                  href={item.volumeInfo.infoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="small">Learn More</Button>
                </a>
              </CardActions>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Books;
