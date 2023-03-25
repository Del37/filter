import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./App.css";

function MediaCard({ tag }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          Tag: {tag}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

function CardList({ tags }) {
  const cardList = tags.map((tag, index) => {
    return (
      <li key={index}>
        <MediaCard tag={tag} />
      </li>
    );
  });

  return <ul>{cardList}</ul>;
}

function TagSearch({ tags, selectedTags, setSelectedTags }) {
  const handleTagChange = (event, value) => {
    setSelectedTags(value);
  };

  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={tags}
      value={selectedTags}
      onChange={handleTagChange}
      getOptionLabel={(tag) => tag}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Favorites"
          placeholder="Choose your favorite tags"
        />
      )}
      sx={{ width: "500px", marginBottom: "20px" }}
    />
  );
}

function App() {
  const tags = ["one", "two", "three"];
  const [selectedTags, setSelectedTags] = useState(["one", "two", "three"]);

  return (
    <div className="App">
      <TagSearch
        tags={tags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <CardList tags={selectedTags} />
    </div>
  );
}

export default App;
