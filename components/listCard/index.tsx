import { useNavigation, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { Card, Colors, Constants, Text, View } from "react-native-ui-lib";

type ListCardProps = {
  title: string;
  date: string;
  url: string;
  from: string;
};

export function ListCard({ title, date, url, from }: ListCardProps) {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push(url)}>
      <View>
        <Card
          padding-10
          style={{
            gap: 10,
            height: "auto",
            display: "flex",
            flexDirection: "row",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}
        >
          <Card.Image
            source={{ uri: "https://dummyimage.com/600x400/000/fff" }}
            style={{
              height: 100,
              width: 100,
              aspectRatio: 12 / 10,
              borderRadius: 10,
            }}
          />
          <View>
            <Card.Section
              content={[
                {
                  text: title,
                  text80H: true,
                  black: true,
                  style: { fontWeight: "900" },
                },
              ]}
              contentStyle={{
                width: "90%",
              }}
            />
            <Card.Section
              content={[
                {
                  text: date,
                  text100H: true,
                  black: true,
                },
              ]}
              contentStyle={{
                width: "100%",
              }}
            />
            <View
              style={{
                alignSelf: "flex-start",
                borderRadius: 5,
              }}
              backgroundColor={Colors.$textPrimary}
            >
              <Text
                style={{
                  fontSize: 10,
                  padding: 3,
                }}
                white
              >
                PPMI Mesir
              </Text>
            </View>
          </View>
        </Card>
      </View>
    </Pressable>
  );
}
