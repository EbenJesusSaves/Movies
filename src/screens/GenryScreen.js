import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../../contexts/MoviesContext";
import { HeaderTextHot } from "../../utils/BasicStyles";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  VirtualizedList,
} from "react-native";
import { Button, RadioButton, Text } from "react-native-paper";
import { GenreComponent } from "../components/GenreComponent";
import { ViewContainer } from "../components/TrendingComponent";

export const GenryScreen = ({ navigation }) => {
  const { genre, setGenre } = useContext(MoviesContext);

  const [value, setValue] = React.useState("first");

  let genry = [
    "",
    "Action",
    " Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "  Horror",
    "Musical",
    "Mystery",
    "  Romance",
    "   Sci-Fi",
    "   Sport",
    "  Thriller",
    "  War",
    "  Western",
  ];
  let genreEmoji = [
    "",
    "🔫",
    "🧌",
    "🧸",
    "🧑‍🦳",
    "😂",
    "🔪",
    "📰",
    "😎",
    "👨‍👩‍👧‍👦",
    "🦄",
    "🧓",
    "  🎃",
    "🎶",
    "😶‍🌫️",
    " 💋",
    " 🔭",
    "  ⚽",
    " 🥶",
    " 🪖",
    " 👩‍🦳",
  ];

  console.log(genre);
  // useEffect(() => {
  //   (() => {
  //     setGenre("");
  //   })();
  // }, [genre]);
  return (
    <ViewContainer style={{ flex: 1, backgroundColor: "black" }}>
      <>
        <HeaderTextHot>Scroll to Select Genre</HeaderTextHot>
        <ScrollView horizontal={true} style={{ flexDirection: "row", flex: 4 }}>
          <RadioButton.Group
            onValueChange={(newValue) => setGenre(newValue)}
            value={genre}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {genry.map((gen, i) => {
                  return (
                    <View>
                      <View
                        style={{
                          backgroundColor: "#ff314e",
                          margin: 10,
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 10,
                        }}
                        key={gen}
                      >
                        <TouchableOpacity onPress>
                          <RadioButton.Item
                            uncheckedColor="#ff314e"
                            color="white"
                            label={gen}
                            value={gen}
                            style={{ height: 50 }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </RadioButton.Group>
        </ScrollView>
        <View style={{ flex: 6 }}>
          <GenreComponent navigation={navigation} />
        </View>
      </>
    </ViewContainer>
  );
};
