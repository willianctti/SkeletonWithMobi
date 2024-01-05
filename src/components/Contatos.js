import { Skeleton } from "moti/skeleton";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const SkeletonRender = () => {
  return (
    <Skeleton.Group show>
      <View
        style={{
          padding: 10,
          marginBottom: 10,
          height: 80,
          width: "60%",
        }}
      >
        <Skeleton
          height={80}
          width={"100%"}
          colorMode="light"
          backgroundColor="#d4d4d4"
          transition={{
            type: "timing",
            duration: 10000,
          }}
        />
      </View>

      <View
        style={{
          padding: 10,
          marginBottom: 10,
          height: 80,
          width: "60%",
        }}
      >
        <Skeleton
          height={80}
          width={"100%"}
          colorMode="light"
          backgroundColor="#d4d4d4"
          transition={{
            type: "timing",
            duration: 10000,
          }}
        />
      </View>
      <View
        style={{
          padding: 10,
          marginBottom: 10,
          height: 80,
          width: "60%",
        }}
      >
        <Skeleton
          height={80}
          width={"100%"}
          colorMode="light"
          backgroundColor="#d4d4d4"
          transition={{
            type: "timing",
            duration: 10000,
          }}
        />
      </View>
      <View
        style={{
          padding: 10,
          marginBottom: 10,
          height: 80,
          width: "60%",
        }}
      >
        <Skeleton
          height={80}
          width={"100%"}
          colorMode="light"
          backgroundColor="#d4d4d4"
          transition={{
            type: "timing",
            duration: 10000,
          }}
        />
      </View>
      <View
        style={{
          padding: 10,
          marginBottom: 10,
          height: 80,
          width: "60%",
        }}
      >
        <Skeleton
          height={80}
          width={"100%"}
          colorMode="light"
          backgroundColor="#d4d4d4"
          transition={{
            type: "timing",
            duration: 10000,
          }}
        />
      </View>
      <View
        style={{
          padding: 10,
          marginBottom: 10,
          height: 80,
          width: "60%",
        }}
      >
        <Skeleton
          height={80}
          width={"100%"}
          colorMode="light"
          backgroundColor="#d4d4d4"
          transition={{
            type: "timing",
            duration: 10000,
          }}
        />
      </View>
      <View
        style={{
          padding: 10,
          marginBottom: 10,
          height: 80,
          width: "60%",
        }}
      >
        <Skeleton
          height={80}
          width={"100%"}
          colorMode="light"
          backgroundColor="#d4d4d4"
          transition={{
            type: "timing",
            duration: 10000,
          }}
        />
      </View>
      <View
        style={{
          padding: 10,
          marginBottom: 10,
          height: 80,
          width: "60%",
        }}
      >
        <Skeleton
          height={80}
          width={"100%"}
          colorMode="light"
          backgroundColor="#d4d4d4"
          transition={{
            type: "timing",
            duration: 10000,
          }}
        />
      </View>
    </Skeleton.Group>
  );
};

const RenderItem = ({ item }) => (
  <View style={styles.contatoItem} key={item.nome}>
    <Text>{item.nome}</Text>
    <Text>{item.telefone}</Text>
  </View>
);

const Contatos = () => {
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(false);

  const carregarContatos = () => {
    setTimeout(() => {
      const contatosFicticios = [
        { id: 1, nome: "João", telefone: "123-456-7890" },
        { id: 2, nome: "Maria", telefone: "987-654-3210" },
        { id: 3, nome: "Willian", telefone: "987-654-3210" },
        { id: 4, nome: "Pedro", telefone: "987-654-3210" },
        { id: 5, nome: "Alo", telefone: "987-654-3210" },
        { id: 6, nome: "Maria", telefone: "987-654-3210" },
        { id: 7, nome: "Maria de novo", telefone: "987-654-3210" },
        { id: 8, nome: "Maria again", telefone: "987-654-3210" },
      ];
      setContatos(contatosFicticios);
      setLoading(true);
    }, 1000);
  };

  useEffect(() => {
    carregarContatos();
  }, []);

  return (
    <View style={styles.container}>
      {!loading ? (
        <SkeletonRender />
      ) : (
        contatos.map((item) => {
          return <RenderItem item={item} />;
        })
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  titulo: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  contatoItem: {
    height: 80,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    width: "60%",
  },
});

export default Contatos;
