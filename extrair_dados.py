import os
import csv
import json

caminho_csv = r"C:\Users\Kevin\Downloads\hello-react-app-master (2)\backend\microdados_ed_basica_2023.csv"
caminho_json = r"C:\Users\Kevin\Downloads\hello-react-app-master (2)\backend\dadosparaiba.json"

COLUNAS_DESEJADAS = ['NO_ENTIDADE', 'NO_REGIAO', 'CO_UF', 'NO_MUNICIPIO', 'NO_MESORREGIAO', 'NO_MICRORREGIAO', 'QT_MAT_BAS']


def extrair_paraiba(caminho_csv, caminho_json):
    linhas_paraiba = []

    try:
        with open(caminho_csv, mode='r', encoding='ISO-8859-1', newline='') as csvfile:
            leitor = csv.DictReader(csvfile, delimiter=';')
            
            colunas_faltando = [col for col in COLUNAS_DESEJADAS if col not in leitor.fieldnames]
            if colunas_faltando:
                raise KeyError(f"As seguintes colunas estão ausentes no arquivo CSV: {colunas_faltando}")

            for linha in leitor:
                if linha.get("SG_UF") == "PB":
                    
                    linha_filtrada = {coluna: linha.get(coluna, "") for coluna in COLUNAS_DESEJADAS}
                    linhas_paraiba.append(linha_filtrada)

        with open(caminho_json, mode='w', encoding='utf-8') as jsonfile:
            json.dump(linhas_paraiba, jsonfile, ensure_ascii=False, indent=2)

        print(f"Arquivo '{caminho_json}' criado com sucesso!")

    except FileNotFoundError:
        print(f"Erro: Arquivo CSV não encontrado no caminho '{caminho_csv}'")
    except KeyError as e:
        print(f"Erro: {e}")
    except Exception as e:
        print(f"Erro inesperado: {e}")

if __name__ == "__main__":
    extrair_paraiba(caminho_csv, caminho_json)

