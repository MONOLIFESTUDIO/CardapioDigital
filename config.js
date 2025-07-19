/**
 * ====================================================================
 * CONFIGURAÇÃO DO CARDÁPIO SHEETS - V3.4   - 19/07/2025 - 01h44    
 * ====================================================================
 * 
 * Este arquivo contém todas as configurações principais do sistema,
 * incluindo URLs das planilhas e textos traduzíveis.
 */

// ====================================================================
// URLs DAS PLANILHAS DO GOOGLE SHEETS
// ====================================================================
/**
 * Para alterar as planilhas utilizadas pelo cardápio, modifique as URLs abaixo.
 * Certifique-se de que as planilhas estejam publicadas e acessíveis publicamente.
 * 
 * Como obter a URL correta:
 * 1. Abra sua planilha no Google Sheets
 * 2. Vá em Arquivo > Publicar na web
 * 3. Selecione a aba específica que deseja publicar
 * 4. Escolha o formato CSV
 * 5. Copie a URL gerada
 */

//---LINKS DE DEMONSTRAÇÃO ABAIXO: TROQUE PELO SEUS LINKS

// URL of the spreadsheet with menu items (tab: Items)
const MENU_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSL_-m5LL9vOU4Nua4BtL4bWC_G8ACdhQX0v1Ik-YAcaf4Wt4JmLRtJCTm-z9l9WPWXgxXq00R9WXA6/pub?gid=1132427241&single=true&output=csv';

// URL of the spreadsheet with menu categories (tab: Categories)
const CATEGORIES_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSL_-m5LL9vOU4Nua4BtL4bWC_G8ACdhQX0v1Ik-YAcaf4Wt4JmLRtJCTm-z9l9WPWXgxXq00R9WXA6/pub?gid=271394769&single=true&output=csv';

// URL of the spreadsheet with general settings (tab: Config)
const CONFIG_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSL_-m5LL9vOU4Nua4BtL4bWC_G8ACdhQX0v1Ik-YAcaf4Wt4JmLRtJCTm-z9l9WPWXgxXq00R9WXA6/pub?gid=0&single=true&output=csv';

// URL of the spreadsheet with operating hours (tab: Hours)
const HOURS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSL_-m5LL9vOU4Nua4BtL4bWC_G8ACdhQX0v1Ik-YAcaf4Wt4JmLRtJCTm-z9l9WPWXgxXq00R9WXA6/pub?gid=1842804489&single=true&output=csv';

// URL of the spreadsheet with neighborhoods and delivery fees (tab: Bairros) **OPCIONAL**
const NEIGHBORHOODS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSL_-m5LL9vOU4Nua4BtL4bWC_G8ACdhQX0v1Ik-YAcaf4Wt4JmLRtJCTm-z9l9WPWXgxXq00R9WXA6/pub?gid=1634629476&single=true&output=csv';
