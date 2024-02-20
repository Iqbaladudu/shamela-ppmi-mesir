import {
  Colors,
  View,
  Text,
  Button,
  ButtonSize,
  Constants,
  Image,
  ListItem,
} from "react-native-ui-lib";
import { Entypo } from "@expo/vector-icons";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Pressable, ScrollView } from "react-native";
import { ListCard } from "../components";
import { Link } from "expo-router";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Wihdah from "../assets/Icon/wihdah.svg";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Kpi from "../assets/Icon/kpi.svg";
import AwesomeAlert from "react-native-awesome-alerts";
import AsyncStorage from "@react-native-async-storage/async-storage";

enum OptionCategories {
  News = "BERITA",
  Article = "ARTIKEL",
}

const news = [
  {
    title: "PPMI Mesir Mengadakan Fundraising untuk Membantu Rakyat Palestina",
    waktu: "22 November 2023",
    slug: "/berita/detail/ppmi-mesir-mengadakan-fundraising",
    from: "PPMI Mesir",
  },
];
const article = [
  {
    title:
      "Menyingkap Peran Besar Mahasiswa Indonesia di Mesir dalam Pembangunan Indonesia",
    waktu: "22 November 2023",
    slug: "/artikel/menyingkap-peran-besar-mahasiswa",
    from: "PPMI Mesir",
  },
];

Colors.loadDesignTokens({
  primaryColor: "#0A184F",
});

export default function Page() {
  const [buttonSelected, setButtonSelected] = useState<OptionCategories>(
    OptionCategories.News
  );
  const [modalImageShow, setModalImageShow] = useState(false);
  const [firstTimeModal, setFirstTimeModal] = useState(true);

  let targets: { [key: string]: any } = {};

  function addTarget(ref: any, id: string) {
    targets[id] = ref;
    console.log(targets);
  }

  useEffect(() => {
    async function setModalData() {
      const modalData = await AsyncStorage.getItem("modalLaunched");
      console.log(modalData);
      if (modalData === null) {
        setFirstTimeModal(true);
        AsyncStorage.setItem("modalLaunched", "false");
      } else {
        setFirstTimeModal(false);
      }
    }
    setModalData();
  });
  // return <Onboarding />;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: Colors.grey80,
      }}
    >
      {firstTimeModal ? (
        <AwesomeAlert
          show={firstTimeModal}
          // title="Selamat Datang Mahasiswa Baru"
          // showCancelButton={true}
          // showConfirmButton={true}
          // alertContainerStyle={{ height: 400 }}

          customView={
            // <Pressable
            //   onPress={() =>
            //     Linking.openURL("file://../../assets/pdf/ModulOrmaba.pdf")
            //   }
            // >
            <View
              height={200}
              width={200}
              center
              style={{
                gap: 10,
              }}
            >
              <View ref={(r) => addTarget(r, "1")}>
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                  center
                >
                  Baca Modul Ormaba 2024 Sekarang Juga!
                </Text>
              </View>
              <View>
                {/* <Hint
                visible={true}
                message={"Message goes here"}
                color={Colors.red30}
              > */}
                <Image
                  height={150}
                  width={130}
                  source={require("../assets/etc/cover.png")}
                />
                {/* </Hint> */}
              </View>
            </View>
            // </Pressable>
          }
        />
      ) : null}
      <LinearGradient
        colors={["#0575E6", "#0A184F"]}
        style={{
          height: "auto",
          paddingVertical: 50,
          justifyContent: "center",
          alignItems: "center",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        <View centerH marginB-20>
          <Text text60 white>
            Selamat Datang di Shamela
          </Text>
          <Text text60 white>
            by PPMI Mesir
          </Text>
        </View>
        <MenuGrid />
      </LinearGradient>
      {/* <View
        marginH-20
        marginT-20
        style={{
          gap: 5,
        }}
      >
        <View>
          <Text text60>Ongoing Events</Text>
        </View>
        <ListItem
          style={{
            shadowColor: Colors.black,
            shadowOffset: { width: 2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        >
          <View height={30} width={"100%"} centerV>
            <Text
              text70
              style={{
                fontWeight: "bold",
              }}
            >
              Ormaba
            </Text>
          </View>
        </ListItem>
      </View> */}
      <View
        style={{
          borderTopRightRadius: 40,
        }}
      >
        <Option
          setButtonSelected={setButtonSelected}
          buttonSelected={buttonSelected}
        />
        <View marginT-20 marginB-100>
          <View marginH-20 marginB-10>
            <Text text60>Galeri & Pemberitahuan</Text>
          </View>
          {/* <Modal
            visible={modalImageShow}
            style={{
              flex: 1,
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignContent: "center",
            }}
            transparent={true}
            animationType="fade"
          >
            <Pressable onPress={() => setModalImageShow(false)}>
              <BlurView>
                <View
                  center
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <View
                    style={{
                      height: 100,
                      width: 100,
                      backgroundColor: Colors.red1,
                    }}
                  >
                    <Text>Hai</Text>
                  </View>
                </View>
              </BlurView>
            </Pressable>
          </Modal> */}
          <View center marginT-10>
            <Carousel
              data={[{ name: "iqbal" }, { name: "Dudu" }, { name: "Tamvan" }]}
              renderItem={({ item, index }) => (
                <Pressable onPress={() => setModalImageShow(true)}>
                  <View
                    style={{
                      height: "50%",
                      width: "100%",
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://images.unsplash.com/photo-1682687221038-404cb8830901?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        height: (Constants.windowWidth * 80) / 100,
                      }}
                      style={{
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </Pressable>
              )}
              sliderWidth={Constants.windowWidth}
              itemHeight={50}
              itemWidth={300}
              layout="default"
              loop
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

type OptionProps = {
  setButtonSelected: Dispatch<SetStateAction<OptionCategories>>;
  buttonSelected: OptionCategories;
};

function Option({ setButtonSelected, buttonSelected }: OptionProps) {
  return (
    <View
      padding-20
      style={{
        gap: 10,
      }}
    >
      <View
        style={{
          gap: 10,
        }}
      >
        <View>
          <Text text60>Pilihan</Text>
        </View>
        <View
          row
          style={{
            gap: 10,
          }}
        >
          <Button
            label="Berita"
            size={ButtonSize.medium}
            onPress={() => setButtonSelected(OptionCategories.News)}
            backgroundColor={
              buttonSelected === "BERITA"
                ? Colors.$textPrimary
                : Colors.$backgroundDarkActive
            }
          />
          <Button
            label="Artikel"
            size={ButtonSize.medium}
            color={Colors.white}
            onPress={() => setButtonSelected(OptionCategories.Article)}
            backgroundColor={
              buttonSelected === "ARTIKEL"
                ? Colors.$textPrimary
                : Colors.$backgroundDarkActive
            }
          />
        </View>
      </View>
      <View
        style={{
          gap: 10,
        }}
      >
        {buttonSelected === "BERITA" && (
          <>
            <ListCard
              title={news[0].title}
              date={news[0].waktu}
              url={news[0].slug}
              from={news[0].from}
            />
            <ListCard
              title={news[0].title}
              date={news[0].waktu}
              url={news[0].slug}
              from={news[0].from}
            />
            <ListCard
              title={news[0].title}
              date={news[0].waktu}
              url={news[0].slug}
              from={news[0].from}
            />
            <ListCard
              title={news[0].title}
              date={news[0].waktu}
              url={news[0].slug}
              from={news[0].from}
            />
            <ListCard
              title={news[0].title}
              date={news[0].waktu}
              url={news[0].slug}
              from={news[0].from}
            />
          </>
        )}
        {buttonSelected === "ARTIKEL" && (
          <>
            <ListCard
              title={article[0].title}
              date={article[0].waktu}
              url={article[0].slug}
              from={article[0].from}
            />
          </>
        )}
      </View>
    </View>
  );
}

function MenuGrid() {
  return (
    <View
      width={"70%"}
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        borderRadius: 10,
        gap: 5,
        justifyContent: "center",
        alignItems: "stretch",
      }}
      backgroundColor={Colors.$backgroundNeutral}
      padding-20
    >
      <MenuItem text="Berita" href="berita">
        <FontAwesome name="newspaper-o" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Publikasi" href="artikel">
        <Entypo name="news" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Kegiatan" href="kegiatan">
        <MaterialCommunityIcons
          name="newspaper-variant-multiple"
          size={24}
          color="white"
        />
      </MenuItem>
      <MenuItem text="Video" href="video">
        <Foundation name="play-video" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Wihdah" href="wihdah">
        <Wihdah />
      </MenuItem>
      <MenuItem text="Kekeluargaan" href="kekeluargaan">
        <MaterialIcons name="groups" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Senat" href="senat">
        <FontAwesome name="university" size={24} color="white" />
      </MenuItem>
      <MenuItem text="DKKM" href="dkkm">
        <MaterialIcons name="security" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Kesehatan" href="kesehatan">
        <MaterialIcons name="health-and-safety" size={24} color="white" />
      </MenuItem>
      <MenuItem text="KPI" href="kpi">
        <Kpi />
      </MenuItem>
      <MenuItem text="Radio" href="radio">
        <Ionicons name="radio-sharp" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Jadwal Salat" href="jadwal-salat">
        <FontAwesome6 name="mosque" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Kalender" href="kalender">
        <AntDesign name="calendar" size={24} color="white" />
      </MenuItem>
      <MenuItem text="Pustaka" href="pustaka">
        <MaterialCommunityIcons name="bookshelf" size={24} color="white" />
      </MenuItem>
    </View>
  );
}

type MenuItemProps = {
  children: ReactNode;
  text: string;
  href: string;
};

function MenuItem({ children, text, href }: MenuItemProps) {
  return (
    <Link href={href}>
      <View center height={"auto"} width={50}>
        <View
          center
          backgroundColor={Colors.$textPrimary}
          style={{
            borderRadius: 5,
            height: 40,
            width: 40,
          }}
        >
          {children}
        </View>
        <View width={50} height={25}>
          <Text text100 adjustsFontSizeToFit center>
            {text}
          </Text>
        </View>
      </View>
    </Link>
  );
}
