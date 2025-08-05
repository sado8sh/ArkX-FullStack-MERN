const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2] || 'employee_data_.xlsx'; // Allow CLI input
const outputPath = process.argv[3] || 'employees_with_bonus.xlsx';

if (!fs.existsSync(inputPath)) {
    console.error(`❌ File not found: ${inputPath}`);
    process.exit(1);
}

const calculateBonusPercentage = (salary) => {
    if (salary < 50000) return 5;
    if (salary <= 100000) return 7;
    return 10;
};

const processExcel = async () => {
    try {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(inputPath);
        const worksheet = workbook.getWorksheet(1); 

        worksheet.getRow(1).getCell(3).value = 'BonusPercentage';
        worksheet.getRow(1).getCell(4).value = 'BonusAmount';

        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber === 1) return; 

            const salary = row.getCell(2).value;
            const bonusPercent = calculateBonusPercentage(salary);
            const bonusAmount = salary * (bonusPercent / 100);

            row.getCell(3).value = `${bonusPercent}%`;
            row.getCell(4).value = bonusAmount.toFixed(2);
        });

        await workbook.xlsx.writeFile(outputPath);
        console.log(`✅ Bonus calculations written to ${outputPath}`);

    } catch (error) {
        console.error('❌ Error processing Excel file:', error.message);
    }
};

processExcel();