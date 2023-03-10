import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { COLORS, NFTData, SIZES } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
	const [nftList, setNftList] = useState(NFTData);

	const handleSearch = (searchParam) => {
		if (searchParam) {
			const filteredItems = nftList.filter((item) =>
				item.name.toLowerCase().includes(searchParam.toLowerCase())
			);
			return filteredItems.length > 0 ? setNftList(filteredItems) : null;
		}
		return setNftList(NFTData);
	};
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar background={COLORS.primary} />
			<View style={{ flex: 1 }}>
				<View style={{ zIndex: 0 }}>
					<FlatList
						data={nftList}
						renderItem={({ item }) => <NFTCard data={item} />}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
					/>
				</View>

				<View
					style={{
						position: "absolute",
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						zIndex: -1,
					}}
				>
					<View
						style={{
							height: 300,
							backgroundColor: COLORS.primary,
						}}
					/>
					<View style={{ flex: 1, backgroundColor: COLORS.white }} />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
