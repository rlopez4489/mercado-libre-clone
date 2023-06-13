export function formatMoney(amount) {
  // Convertir el número a una cadena
  var str = amount?.toString();

  // Separar la parte entera de la parte decimal
  var parts = str?.split(".");
  var integerPart = parts && parts[0];
  var decimalPart = parts?.length > 1 ? parts[1] : "";

  // Agregar los puntos para separar miles
  var formattedIntegerPart = "";
  var count = 0;
  for (var i = integerPart?.length - 1; i >= 0; i--) {
    formattedIntegerPart = integerPart.charAt(i) + formattedIntegerPart;
    count++;
    if (count === 3 && i !== 0) {
      formattedIntegerPart = "." + formattedIntegerPart;
      count = 0;
    }
  }

  // Combinar la parte entera y la parte decimal con el punto y coma
  var formattedAmount =
    formattedIntegerPart + (decimalPart !== "" ? "," + decimalPart : "");

  return formattedAmount;
}

export function capitalizeFirstLetter(word) {
  return word?.charAt(0)?.toUpperCase() + word?.slice(1);
}

export function separateWithLineBreak(text) {
  const separator = "\n";
  const textWithoutAsterisks = text?.replace(/\*/g, "");
  const textWithoutDashes = textWithoutAsterisks?.replace(/-/g, "");
  const separatedText = textWithoutDashes?.replace(
    /(\*|-)/g,
    separator + separator
  );
  return separatedText;
}
