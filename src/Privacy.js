import React from 'react';

export const Privacy = () => {
    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    };

    const headerStyle = {
        color: '#333',
    };

    const subHeaderStyle = {
        color: '#555',
    };

    const paragraphStyle = {
        color: '#777',
    };

    const listStyle = {
        listStyle: 'none',
        padding: '0',
    };

    const listItemStyle = {
        marginBottom: '10px',
    };

    const dateStyle = {
        color: '#999',
        fontSize: '14px',
    };

    const noticeStyle = {
        color: '#ff5733',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>AI Grammar Checker - User Privacy Policy</h1>
            <p style={dateStyle}>Effective Date: 9 September 2023</p>

            <p>Welcome to AI Grammar Checker! We are committed to protecting your privacy and ensuring the security of your personal information. Please take a moment to review our User Privacy Policy to understand how we handle your data.</p>

            <h2 style={subHeaderStyle}>1. Scope of Application</h2>
            <ul style={listStyle}>
                <li style={listItemStyle}>(a) Information We Collect:</li>
                <ul style={listStyle}>
                    <li style={listItemStyle}>Usage data</li>
                    <li style={listItemStyle}>Device information (such as device type and browser)</li>
                    <li style={listItemStyle}>Language preferences</li>
                    <li style={listItemStyle}>Date and time of access</li>
                </ul>
                <p style={paragraphStyle}>Please note that we do not collect, store, or correct any specific user-generated data or content.</p>
            </ul>

            <h2 style={subHeaderStyle}>2. Use of Information</h2>
            <ul style={listStyle}>
                <li style={listItemStyle}>(a) Your Privacy Matters:</li>
                <p style={paragraphStyle}>We do not provide, sell, rent, share, or trade your personal information with unrelated third parties without your prior consent. Rest assured, we do not access, modify, or correct any user-generated content.</p>
            </ul>

            <h2 style={subHeaderStyle}>3. Information Disclosure</h2>
            <p style={paragraphStyle}>We will disclose your non-personal information only in accordance with applicable laws and regulations, and solely for the purpose of improving our service and user experience.</p>

            <h2 style={subHeaderStyle}>4. Information Storage and Exchange</h2>
            <p style={paragraphStyle}>Information collected is stored on secure servers, and it may be accessed or processed outside your country or region.</p>

            <h2 style={subHeaderStyle}>5. Information Security</h2>
            <p style={paragraphStyle}>We take the security of your personal information seriously. We do not sell or trade your data in any way without your explicit consent.</p>

            <h2 style={subHeaderStyle}>6. Changes to this Privacy Policy</h2>
            <ul style={listStyle}>
                <li style={listItemStyle}>(a) If we decide to update our privacy policy, we will notify you through this policy and on our website to keep you informed about how we handle your data.</li>
                <li style={listItemStyle}>(b) We reserve the right to amend this policy at any time, so please check it periodically. If there are significant changes, we will provide notice through our website.</li>
                <li style={listItemStyle}>(c) We encourage you to use AI Grammar Checker responsibly and share your content only as needed. If you suspect any unauthorized access or misuse of your account, please contact our customer support immediately so that we can take appropriate action.</li>
            </ul>

            <p>By using AI Grammar Checker, you agree to the terms outlined in this User Privacy Policy. This policy is an integral part of our Application Service Use Agreement.</p>

            <p style={noticeStyle}>Thank you for trusting AI Grammar Checker with your personal information. If you have any questions or concerns, please do not hesitate to contact us.</p>

            <p style={dateStyle}>Last Updated: 9 September 2023</p>
        </div>
    );
};
